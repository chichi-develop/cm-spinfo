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

```
# dredd controllers/v1/cm-spinfo-api.yml localhost:8340 -d
```

## Swagger

```
cm-spinfo/cm-spinfo-api/controllers/v1/cm-spinfo-api.yml
```

- GitHub, Chrome : [swagger-viewer](https://chrome.google.com/webstore/detail/swagger-viewer/nfmkaonpdmaglhjjlggfhlndofdldfag)
- VSCode : [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer)

## PlantUML

```
cm-spinfo/cm-spinfo.md
```

- GitHub, Chrome : [Pegmatite](https://chrome.google.com/webstore/detail/pegmatite/jegkfbnfbfnohncpcfcimepibmhlkldo)
- VSCode:
  - [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)