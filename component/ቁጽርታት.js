// import React from 'react'
// import { Text, View } from 'react-native'

// const ቁጽርታት = () => {
//   return (
//     <View> <Text>አልቦ 0
//     ፩ አሐዱ 1 ፪ ክልኤቱ 2 ፫ ሠለስቱ 3 ፬ አርባዕቱ 4 ፭ ሐምስቱ 5 ፮ ስድስቱ 6 ፯ ስብዓቱ 7 ፰ ስመንቱ 8 ፱ ተሰዓቱ 9 ፲ አሠርቱ 10
//     ፲፩ አሠርቱ ወአሐዱ 11 ፲፪ አሠርቱ ወክልኤቱ 12 ፲፫ አሠርቱ ወሠለስቱ 13 ፲፬ አሠርቱ ወአርባዕቱ 14 ፲፭ አሠርቱ ወሐምስቱ 15 ፲፮ አሠርቱ ወስድስቱ 16
//     ፲፯ አሠርቱ ወሰብዓቱ 17 ፲፰ አሠርቱ ወስመንቱ 18  ፲፱ አሠርቱ ወተሰዓቱ 19  ፳ እስራ 20  ፳፩ እስራ ወአሐዱ 21 ፳፪ እስራ ወክልኤቱ 22
//     ፳፫ እስራ ወሠለስቱ 23 ፳፬ እስራ ወአርባዕቱ 24 ፳፭ እስራ ወሐምስቱ 25 ፳፮ እስራ ወስድስቱ 26 ፳፯ እስራ ወሰብዓቱ 27 ፳፰ እስራ ወሰመንቱ 28
// ፳፱ እስራ ወተሰዓቱ 29 ፴ ሠላሳ 30 ፴፩ ሠላሳ ወአሐዱ 31 ፴፪ ሠላሳ ወክልኤቱ 32 ፴፫ ሠላሳ ወሠለስቱ 33 ፴፬ ሠላሳ ወአርባዕቱ 34 ፴፭ ሠላሳ ወሐምስቱ 35
// ፴፮ ሠላሳ ወስድስቱ 36 ፴፯ ሠላሳ ወሰብዓቱ 37 ፴፰ ሠላሳ ወሰመንቱ 38 ፴፱ ሠላሳ ወተሰዓቱ 39 ፵ አርብዓ 40 ፶ ሃምሳ 50 ፷ ስድሳ 60
// ፸ ሰብዓ 70 ፹ ሰማንያ 80 ፺ ተሰዓ 90
// ፻ ምዕት 100
// ፻፩ ምዕት ወአሐዱ 101
// ፻፪ ምዕት ወክልኤቱ 102
// ፻፫ ምዕት ወሠለስቱ 103
// ፻፬ ምዕት ወአርባዕቱ 104
// ፻፭ መዕት ወሐምስቱ 105
// ፻፮ ምዕት ወስድስቱ 106
// ፻፯ ምዕት ወሰብዓቱ 107
// ፻፰ ምዕት ወስመንቱ 108
// ፻፱ ምዕት ወተሰዓቱ 109
// ፻፲ ምዕት ወአሠርቱ 110
// ፻፲ወ፩ ምዕት አሠርቱ ወአሐዱ 111
// ፻፲ወ፪ ምዕት አሠርቱ ወክልኤቱ 112
// ፻፲ወ፫ ምዕት አሠርቱ ወሠለስቱ 113
// ፻፲ወ፬ ምዕት አሠርቱ ወአርባዕቱ 114
// ፻፲ወ፭ ምዕት አሠርቱ ወሐምስቱ 115
// ፻፲ወ፮ ምዕት አሠርቱ ወስድስቱ 116
// ፻፲ወ፯ ምዕት አሠርቱ ወሰብዓቱ 117
// ፻፲ወ፰ ምዕት አሠርቱ ወስመንቱ 118
// ፻፲ወ፱ ምዕት አሠርቱ ወተሰዓቱ 119
// ፻፳ ምዕት ወእስራ 120
// ፻፴ ምዕት ወሠላሳ 130
// ፻፵ ምዕት ወአርብዓ 140
// ፻፶ ምዕት ወሃምሳ 150
// ፻፷ ምዕት ወስድሳ 160
// ፻፸ ምዕት ወሰብዓ 170
// ፻፹ ምዕት ወሰማንያ 180
// ፻፺ ምዕት ወተሰዓ 190
// ፪፻ ክልኤቱ ምዕት 200
// ፪፻ወ፩ ክልኤቱ ምዕት ወአሐዱ 201
// ፪፻ወ፪ ክልኤቱ ምዕት ወክልኤቱ 202
// ፪፻ወ፫ ክልኤቱ ምዕት ወሠለስቱ 203
// ፪፻ወ፬ ክልኤቱ ምዕት ወአርባዕቱ 204
// ፪፻ወ፭ ክልኤቱ ምዕት ወሐምስቱ 205
// ፪፻ወ፮ ክልኤቱ ምዕት ወስድስቱ 206
// ፪፻ወ፯ ክልኤቱ ምዕት ወሰብዓቱ 207
// ፪፻ወ፰ ክለኤቱ ምዕት ወስመንቱ 208
// ፪፻ወ፱ ክልኤቱ ምዕት ወተሰዓቱ 209
// ፪፻ወ፲ ክልኤቱ ምዕት ወአሠርቱ 210
// ፪፻፲ወ፩ ክልኤቱ ምዕት አሠርቱ ወአሐዱ 211
// ፪፻፲ወ፪ ክልኤቱ ምዕት አሠርቱ ወክልኤቱ 212
// ፪፻፲ወ፫ ክልኤቱ ምዕት አሠርቱ ወሠልስቱ 213
// ፪፻፲ወ፬ ክልኤቱ ምዕት አሠርቱ ወአርባቱ 214
// ፪፻፲ወ፭ ክልኤቱ ምዕት አሠርቱ ወሐምስቱ 215
// ፪፻፲ወ፮ ክልኤቱ ምዕት አሠርቱ ወስድስቱ 216
// ፪፻፲ወ፯ ክልኤቱ ምዕት አሠርቱ ወሰብዓቱ 217
// ፪፻፲ወ፰ ክልኤቱ ምዕት አሠርቱ ወሰመንቱ 218
// ፪፻፲ወ፱ ክልኤቱ ምዕት አሠርቱ ወተሰዓቱ 219
// ፪፻፳ ክልኤቱ ምዕት ወእስራ 220
// ፪፻፴ ክልኤቱ ምሪዕት ወሠላሳ 230
// ፪፻፵ ክልኤቱ ምዕት ወአርብዓ 240
// ፪፻፶ ክልኤቱ ምዕት ወሃምሳ 250
// ፪፻፷ ክልኤቱ ምዕት ወስድሳ 260
// ፪፻፸ ክልኤቱ ምዕት ወሰብዓ 270
// ፪፻፹ ክልኤቱ ምዕት ወሰማንያ 280
// ፪፻፺ ክልኤቱ ምዕት ወተሰዓ 290
// ፫፻ ሠለስቱ ምዕት 300
// ፬፻ አርባዕቱ ምዕት 400
// ፭፻ ሐምስቱ ምዕት 500
// ፮፻ ስድስቱ ምዕት 600
// ፯፻ ስብዓቱ ምዕት 700
// ፰፻ ስመንቱ ምዕት 800
// ፱፻ ተሰዓቱ ምዕት 900
// ፲፻ አሠርቱ ምዕት 1000
// ፳፻ እስራ ምዕት 2000
// ፴፻ ሠላሳ ምዕት 3000
// ፵፻ አርብዓ ምዕት 4000
// ፶፻ ሃምሳ ምዕት 5000
// ፷፻ ሳድስ ምዕት 6000
// ፸፻ ሰብዓ ምዕት 7000
// ፹፻ ሰማንያ ምዕት 8000
// ፺፻ ተሰዓ ምዕት 9000
// ፻፻ እልፍ 10,000
// ፪፻፻ ክልኤቱ እልፍ 20,000
// ፫፻፻ ሠለስቱ እልፍ 30,000
// ፬፻፻ አርባዕቱ እልፍ 40,000
// ፭፻፻ ሐምስቱ እልፍ 50,000
// ፮፻፻ ስድስቱ እልፍ 60,000
// ፯፻፻ ሰብዓቱ እልፍ 70,000
// ፰፻፻ ስመንቱ እልፍ 80,000
// ፱፻፻ ተሰዓቱ እልፍ 90,000
// ፲፻፻ አሠርቱ እልፍ 100,000
// ፳፻፻ እስራ እልፍ 200,000
// ፴፻፻ ሠላሳ እልፍ 300,000
// ፵፻፻ አርብዓ እልፍ 400,000
// ፶፻፻ ሃምሳ እልፍ 500,000
// ፷፻፻ ስድሳ እልፍ 600,000
// ፸፻፻ ሰብዓ እልፍ 700,000
// ፹፻፻ ሰማንያ እልፍ 800,000
// ፺፻፻ ተሰዓ እልፍ 900,000
// ፻፻፻ አእላፋት 1,000,000
// ፲፻፻፻ ትእልፊት 10,000,000
// ፻፻፻፻ ትልፊታት 100,000,000
// ፲፻፻፻፻ ምእልፊት 1,000,000,000
//     </Text></View>
//   )
// }

// export default ቁጽርታት