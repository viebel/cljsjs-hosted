/**********************************************************************
 * Extern for hash
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var hash = {
  "common": {
    "BlockHash": function () {}
  },
  "hmac": function () {},
  "ripemd": {
    "ripemd160": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": function () {}
    }
  },
  "ripemd160": {
    "blockSize": {},
    "hmacStrength": {},
    "outSize": {},
    "padLength": {},
    "super_": function () {}
  },
  "sha": {
    "sha1": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": function () {}
    },
    "sha224": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": {
        "blockSize": {},
        "hmacStrength": {},
        "outSize": {},
        "padLength": {},
        "super_": function () {}
      }
    },
    "sha256": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": function () {}
    },
    "sha384": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": {
        "blockSize": {},
        "hmacStrength": {},
        "outSize": {},
        "padLength": {},
        "super_": function () {}
      }
    },
    "sha512": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": function () {}
    }
  },
  "sha1": {
    "blockSize": {},
    "hmacStrength": {},
    "outSize": {},
    "padLength": {},
    "super_": function () {}
  },
  "sha224": {
    "blockSize": {},
    "hmacStrength": {},
    "outSize": {},
    "padLength": {},
    "super_": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": function () {}
    }
  },
  "sha256": {
    "blockSize": {},
    "hmacStrength": {},
    "outSize": {},
    "padLength": {},
    "super_": function () {}
  },
  "sha384": {
    "blockSize": {},
    "hmacStrength": {},
    "outSize": {},
    "padLength": {},
    "super_": {
      "blockSize": {},
      "hmacStrength": {},
      "outSize": {},
      "padLength": {},
      "super_": function () {}
    }
  },
  "sha512": {
    "blockSize": {},
    "hmacStrength": {},
    "outSize": {},
    "padLength": {},
    "super_": function () {}
  },
  "utils": {
    "htonl": function () {},
    "inherits": function () {},
    "join32": function () {},
    "rotl32": function () {},
    "rotr32": function () {},
    "rotr64_hi": function () {},
    "rotr64_lo": function () {},
    "shr64_hi": function () {},
    "shr64_lo": function () {},
    "split32": function () {},
    "sum32": function () {},
    "sum32_3": function () {},
    "sum32_4": function () {},
    "sum32_5": function () {},
    "sum64": function () {},
    "sum64_4_hi": function () {},
    "sum64_4_lo": function () {},
    "sum64_5_hi": function () {},
    "sum64_5_lo": function () {},
    "sum64_hi": function () {},
    "sum64_lo": function () {},
    "toArray": function () {},
    "toHex": function () {},
    "toHex32": function () {},
    "zero2": function () {},
    "zero8": function () {}
  }
};
hash.common.BlockHash.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.hmac.prototype = {
  "_init": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.ripemd.ripemd160.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.ripemd.ripemd160.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.ripemd160.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.ripemd160.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha1.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha1.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha224.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha224.super_.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha224.super_.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha256.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha256.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha384.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_prepareBlock": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha384.super_.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_prepareBlock": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha384.super_.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha512.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_prepareBlock": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha.sha512.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha1.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha1.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha224.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha224.super_.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha224.super_.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha256.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha256.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha384.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_prepareBlock": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha384.super_.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_prepareBlock": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha384.super_.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha512.prototype = {
  "_digest": function () {},
  "_pad": function () {},
  "_prepareBlock": function () {},
  "_update": function () {},
  "digest": function () {},
  "update": function () {}
};
hash.sha512.super_.prototype = {
  "_pad": function () {},
  "digest": function () {},
  "update": function () {}
};
/**********************************************************************
 * End Generated Extern for hash
/**********************************************************************/