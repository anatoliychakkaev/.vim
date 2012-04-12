Install
=======

    # readonly access
    git clone git://github.com/anatoliychakkaev/.vim.git ~/.vim

    # read+write access
    git clone git@github.com:anatoliychakkaev/.vim.git ~/.vim

    # symlinks
    ln -s ~/.vim/vimrc   ~/.vimrc
    ln -s ~/.vim/gvimrc  ~/.gvimrc

    # update submodules
    cd ~/.vim
    git submodule update --init
