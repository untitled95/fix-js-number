main:
	@echo "[INFO] Building"
	npm run build

publish:
	@echo "[INFO] Publishing to NPM"
	npm version patch
	npm publish


test:
	@echo "[INFO] testing with jest"
	npm run lint
	npm test

install:
	@echo "[INFO] Installing dependencies"
	npm install

