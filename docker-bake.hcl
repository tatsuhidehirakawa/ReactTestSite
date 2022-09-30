target "myportfolio_k_dev" {
  dockerfile = "Dockerfile"
  target = "myportfolio_k-a-stage"
  tags = ["myportfolio_k_dev"]
}

target "myportfolio_k_tst" {
  dockerfile = "Dockerfile"
  target = "myportfolio_k-b-stage"
  tags = ["myportfolio_k_tst"]
}

# 参考1：https://zenn.dev/ciffelia/articles/f11d26e9b72a5d
# 参考2：https://docs.docker.jp/engine/reference/commandline/buildx_bake.html