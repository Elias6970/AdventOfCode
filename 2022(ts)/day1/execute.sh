#!/bin/bash

EXECUTABLE="star2.js"
tsc  $1 
node $EXECUTABLE
rm -f $EXECUTABLE
