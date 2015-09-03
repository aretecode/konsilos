#!/usr/bin/env bash

if [ ! $(type -P 'meteor') ]; then
    echo 'Meteor not installed, installing it.'
    curl https://install.meteor.com/ | sh
fi

exit 0
