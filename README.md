=======================
Clip2mix Administration
=======================

[![Build Status](https://travis-ci.org/petrus-v/clip2mix-admin.svg)](https://travis-ci.org/petrus-v/clip2mix-admin)

This expect to be the project to administrate [clip2mix](clip2mix.com).

This project contains all needs to install dependencies on a fresh server.

We Plan to start the web client, with mock services, we will see later if the
server side will be in an other repo or in the same one. I suggest to open an
issue to determinate pros and cons. And an other one to determinate which
technologies to use server side.

Install
-------

This project has a buildout config to install `node`, `npm`, `bower` and so on
using zc.buildout with [gawel's recipe](https://github.com/gawel/gp.recipe.node)
in a python3 virtual environment.

Here commands I used to set my environment on my Debian 8 (Jessie):

```
# Go to your working directory
cd /path-to-working-directory/
# Create a new virtualenv
virtualenv-3.4 buildout-node-venv
# Clone this project
git clone git@github.com:petrus-v/clip2mix-buildout.git
# go on that directory
cd clip2mix-buildout
# Initialiaze the buildout using bootstrap.py
~/path-to-working-directory/buildout-node-venv/bin/python bootstrap.py -c buildout.cfg
# Run buildout to install dependencies defined in `buildout.cfg`
bin/buildout -c buildout.cfg
# Run bower to install dependencies defined in `bower.json`
# (--production: don't install dev dependencies)
bin/bower update --production
```

How to run tests
----------------

You have to use `buildout.dev.cfg` at buildout step to install dev dependencies
and run `bower` without `-p` parameter to install dev dependencies.

then launch tests using *web-component-tester*:

```
bin/wct
```

License
-------

[A-GPL v3](http://www.gnu.org/licenses/agpl-3.0.html)
