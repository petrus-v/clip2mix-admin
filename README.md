=================
Clip2mix Buildout
=================

This is a buildout config to install `node`, `npm` and `bower` using buildout
in a virtualenv (tested using python3.x).

This aims to install environment to develop or deploy clip2mix V2! and could be
use to inspire future projects.

Here commands I used to set my environment on my Debian 8 (Jessie):

```
cd /path-to-working-directory/
virtualenv-3.4 buildout-node-venv
git clone git@github.com:petrus-v/clip2mix-buildout.git
cd clip2mix-buildout
~/path-to-working-directory/buildout-node-venv/bin/python bootstrap.py -c buildout.cfg
bin/buildout -c buildout.cfg
```
