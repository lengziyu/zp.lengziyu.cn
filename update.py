#!/usr/bin/env python3
"""
Force update and rebuild this static Next.js site.

Usage:
  python3 ./update.py

Warning:
  This script is designed for the production deployment directory.
  It discards local tracked changes and untracked non-ignored files.
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def run(command: list[str], *, check: bool = True) -> subprocess.CompletedProcess[str]:
    print(f"\n$ {' '.join(command)}", flush=True)
    return subprocess.run(
        command,
        cwd=ROOT,
        text=True,
        check=check,
    )


def output(command: list[str]) -> str:
    return subprocess.check_output(command, cwd=ROOT, text=True).strip()


def ensure_tool(name: str) -> None:
    if shutil.which(name) is None:
        raise SystemExit(f"缺少命令：{name}，请先安装后再执行。")


def resolve_reset_target() -> str:
    branch = output(["git", "branch", "--show-current"])
    if not branch:
        raise SystemExit("当前不是普通分支状态，请先切回 main/master 等部署分支。")

    upstream = subprocess.run(
        ["git", "rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"],
        cwd=ROOT,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
    )

    if upstream.returncode == 0 and upstream.stdout.strip():
        return upstream.stdout.strip()

    return f"origin/{branch}"


def reload_nginx_if_available() -> None:
    if shutil.which("nginx") is None:
        print("\n未检测到 nginx，跳过重载。")
        return

    test = run(["nginx", "-t"], check=False)
    if test.returncode != 0:
        raise SystemExit("nginx 配置检测失败，已停止重载。")

    if shutil.which("systemctl") is None:
        print("\n未检测到 systemctl，请手动重载 nginx。")
        return

    reload_result = run(["systemctl", "reload", "nginx"], check=False)
    if reload_result.returncode == 0:
        print("\nnginx 已重载。")
    else:
        print("\nnginx 自动重载失败，请手动执行：systemctl reload nginx")


def main() -> None:
    os.chdir(ROOT)

    ensure_tool("git")
    ensure_tool("pnpm")

    is_repo = output(["git", "rev-parse", "--is-inside-work-tree"])
    if is_repo != "true":
        raise SystemExit("当前目录不是 Git 仓库。")

    target = resolve_reset_target()

    print(f"项目目录：{ROOT}")
    print(f"强制同步目标：{target}")
    print("注意：即将丢弃服务器本地修改并覆盖为远程最新版本。")

    run(["git", "fetch", "--all", "--prune"])
    run(["git", "reset", "--hard", target])
    run(["git", "clean", "-fd"])

    run(["pnpm", "install", "--frozen-lockfile"])
    run(["pnpm", "build"])

    index_file = ROOT / "out" / "index.html"
    if not index_file.exists():
        raise SystemExit("构建完成但未找到 out/index.html，请检查 next.config.ts 是否启用了 output: 'export'。")

    reload_nginx_if_available()

    print("\n部署完成。")
    print(f"静态目录：{ROOT / 'out'}")


if __name__ == "__main__":
    try:
        main()
    except subprocess.CalledProcessError as error:
        print(f"\n命令执行失败，退出码：{error.returncode}", file=sys.stderr)
        sys.exit(error.returncode)
