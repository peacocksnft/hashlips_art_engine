const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Pretty Peacocks";
const description = "5555 Eloquently Designed Peacock NFTs";
const baseUri = "image.png";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Beak" },
      { name: "Body" },
      { name: "Eyelash" },
      { name: "Eyes" },
      { name: "Feather" },
      { name: "Head" },
      { name: "Outfit" },
      { name: "Tail Color" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1200,
  height: 1200,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  "name": "Pretty Peacocks",
  "symbol": "",
  "description": "5555 Eloquently Designed Peacock NFTs",
  "seller_fee_basis_points": 0,
  "image": "image.png",
  "external_url": "https://www.prettypeacocks.com/",
  "attributes": [
    {
      "trait_type": "attribute#1 ex: Background",
      "value": "Simple"
    },
    {
      "trait_type": "attribute#2 ex: Clothes",
      "value": "Green"
   },
   {
      "trait_type": "attribute#3 ex: Hair",
      "value": "Long Hair"
    }
  ],
  "collection": {
     "name": "Collection Name",
     "family": "Family Name" 
  },
  "properties": {
    "files": [
      {
        "uri": "image.png",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
      {
        "address": "Solana address where you'll receive SOL",
        "share": 100
      }
    ]
  }
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
