{ pkgs }: {
  deps = [
    pkgs.ruby_3_0
    pkgs.rubyPackages_3_0.jekyll
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}