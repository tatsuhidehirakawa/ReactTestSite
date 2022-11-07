target "STGprd_devpkg_dev" {
  dockerfile = "Dockerfile"
  target = "STGprd_devpkg-a-stage"
  tags = ["STGprd_devpkg_dev"]
}

target "STGprd_devpkg_tst" {
  dockerfile = "Dockerfile"
  target = "STGprd_devpkg-b-stage"
  tags = ["STGprd_devpkg_tst"]
}

# 参考1：https://zenn.dev/ciffelia/articles/f11d26e9b72a5d
# 参考2：https://docs.docker.jp/engine/reference/commandline/buildx_bake.html