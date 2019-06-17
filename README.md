# cm-spinfo start

## Install

```
# git clone https://github.com/chichi-develop/cm-spinfo.git

  or

# hub clone chichi-develop/cm-spinfo
```

```
# cd cm-spinfo
# docker-compose up -d --build
```

## Test

```
# curl -i localhost:8340/api/v1/cm_mdmms/{md_cdcstm}
```

```
# cd cm-spinfo/dummy

# vi make_dummy_aclg.js
# node make_dummy_aclg.js

# vi make_dummy_mdmm.js
# node make_dummy_mdmm.js
```

## Swagger

```
cm-spinfo/cm-spinfo-api/controllers/v1/cm-spinfo-api.yml
```

## PlantUML

```
cm-spinfo/cm-spinfo.md
```