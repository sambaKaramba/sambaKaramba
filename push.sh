#!/bin/bash

echo "📦 Änderungen werden aufgenommen ..."
git add .

echo "📝 Gib eine Commit-Nachricht ein:"
read message

git commit -m "$message"
git push

echo "✅ Hochgeladen!"
