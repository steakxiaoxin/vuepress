# vuepress
nothing

travis ci
 1. settings => 打开仓库switch

使用 Travis-CI

1. 在项目根目录添加 .travis.yml
2. 在 GitHub / Settings / Developer settings / Personal access tokens 添加 new token 权限为 repo
3. 在 Travis CI 项目的 Settings => 打开仓库switch 然后 setting / Environment Variables 添加环境变量 GITHUB_TOKEN
4. commit 后 push 即可