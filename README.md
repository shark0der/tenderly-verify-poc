# Breaking Tenderly PoC

Copy sample env file
```shell
cp .env.example .env
```

Put an account key there (I think it does not need eth).

Then run:

```shell
hh run --network tenderly scripts/deploy.js
```
