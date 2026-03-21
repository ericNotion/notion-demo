#!/bin/bash
set -e

echo "🔧 Setting up Conductor workspace..."

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Error: Bun is not installed"
    echo "Please install Bun: https://bun.sh"
    exit 1
fi

# Copy .playground config from root to preserve username
if [ -f "$CONDUCTOR_ROOT_PATH/.playground" ]; then
    cp "$CONDUCTOR_ROOT_PATH/.playground" .playground
    USERNAME=$(grep "^USERNAME=" .playground | cut -d'=' -f2)
    echo "✓ Found existing username: $USERNAME"
else
    echo "⚠️  No .playground file found in root repo"
    echo "You may need to set up your username manually"
fi

# Copy environment variables
if [ -f "$CONDUCTOR_ROOT_PATH/.env.local" ]; then
    cp "$CONDUCTOR_ROOT_PATH/.env.local" .env.local
    echo "✓ Copied .env.local"
else
    echo "⚠️  No .env.local found in root repo"
    echo "You may need to set up environment variables manually"
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Run user setup (will recognize existing username from .playground)
echo "👤 Running user setup..."
bun run setup

echo "✅ Setup complete!"
