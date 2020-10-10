const elements = new Array(
2459021.778650,   7.0,  -4.0,   4.0,    69.4,
    0.15426011,    0.53115284,    0.00002584,   -0.00000693,
    0.13640407,    0.05138711,   -0.00016094,   -0.00000079,
   23.43566895,   -0.00023278,   -0.00000559,
  284.53555298,   14.99911118,    0.00000023,
    0.55233639,   -0.00012230,   -0.00001071,
    0.00614849,   -0.00012169,   -0.00001066,
    0.00460090,    0.00457799
)

const pathCoordsB1 = [
  {lat:  0.93574, lng:  17.99475},
  {lat:  1.60167, lng:  17.59680},
  {lat:  1.77581, lng:  18.00000},
  {lat:  1.99332, lng:  18.50000},
  {lat:  2.21251, lng:  19.00000},
  {lat:  2.43336, lng:  19.50000},
  {lat:  2.65590, lng:  20.00000},
  {lat:  2.88010, lng:  20.50000},
  {lat:  3.10599, lng:  21.00000},
  {lat:  3.33356, lng:  21.50000},
  {lat:  3.56281, lng:  22.00000},
  {lat:  3.79374, lng:  22.50000},
  {lat:  4.02635, lng:  23.00000},
  {lat:  4.26065, lng:  23.50000},
  {lat:  4.49663, lng:  24.00000},
  {lat:  4.73428, lng:  24.50000},
  {lat:  4.97362, lng:  25.00000},
  {lat:  5.21463, lng:  25.50000},
  {lat:  5.45730, lng:  26.00000},
  {lat:  5.70165, lng:  26.50000},
  {lat:  5.94766, lng:  27.00000},
  {lat:  6.19530, lng:  27.50000},
  {lat:  6.44460, lng:  28.00000},
  {lat:  6.69553, lng:  28.50000},
  {lat:  6.94809, lng:  29.00000},
  {lat:  7.20227, lng:  29.50000},
  {lat:  7.45804, lng:  30.00000},
  {lat:  7.71539, lng:  30.50000},
  {lat:  7.97432, lng:  31.00000},
  {lat:  8.23479, lng:  31.50000},
  {lat:  8.49681, lng:  32.00000},
  {lat:  8.76033, lng:  32.50000},
  {lat:  9.02535, lng:  33.00000},
  {lat:  9.29184, lng:  33.50000},
  {lat:  9.55978, lng:  34.00000},
  {lat:  9.82913, lng:  34.50000},
  {lat: 10.09987, lng:  35.00000},
  {lat: 10.37197, lng:  35.50000},
  {lat: 10.64539, lng:  36.00000},
  {lat: 10.92009, lng:  36.50000},
  {lat: 11.19605, lng:  37.00000},
  {lat: 11.47322, lng:  37.50000},
  {lat: 11.75155, lng:  38.00000},
  {lat: 12.03102, lng:  38.50000},
  {lat: 12.31155, lng:  39.00000},
  {lat: 12.59312, lng:  39.50000},
  {lat: 12.87564, lng:  40.00000},
  {lat: 13.15909, lng:  40.50000},
  {lat: 13.44341, lng:  41.00000},
  {lat: 13.72852, lng:  41.50000},
  {lat: 14.01436, lng:  42.00000},
  {lat: 14.30087, lng:  42.50000},
  {lat: 14.58798, lng:  43.00000},
  {lat: 14.87560, lng:  43.50000},
  {lat: 15.16369, lng:  44.00000},
  {lat: 15.45214, lng:  44.50000},
  {lat: 15.74090, lng:  45.00000},
  {lat: 16.02984, lng:  45.50000},
  {lat: 16.31891, lng:  46.00000},
  {lat: 16.60802, lng:  46.50000},
  {lat: 16.89705, lng:  47.00000},
  {lat: 17.18593, lng:  47.50000},
  {lat: 17.47455, lng:  48.00000},
  {lat: 17.76282, lng:  48.50000},
  {lat: 18.05061, lng:  49.00000},
  {lat: 18.33785, lng:  49.50000},
  {lat: 18.62441, lng:  50.00000},
  {lat: 18.91018, lng:  50.50000},
  {lat: 19.19506, lng:  51.00000},
  {lat: 19.47891, lng:  51.50000},
  {lat: 19.76166, lng:  52.00000},
  {lat: 20.04316, lng:  52.50000},
  {lat: 20.32329, lng:  53.00000},
  {lat: 20.60196, lng:  53.50000},
  {lat: 20.87902, lng:  54.00000},
  {lat: 21.15437, lng:  54.50000},
  {lat: 21.42789, lng:  55.00000},
  {lat: 21.69944, lng:  55.50000},
  {lat: 21.96891, lng:  56.00000},
  {lat: 22.23619, lng:  56.50000},
  {lat: 22.50115, lng:  57.00000},
  {lat: 22.76369, lng:  57.50000},
  {lat: 23.02367, lng:  58.00000},
  {lat: 23.28099, lng:  58.50000},
  {lat: 23.53553, lng:  59.00000},
  {lat: 23.78718, lng:  59.50000},
  {lat: 24.03585, lng:  60.00000},
  {lat: 24.28140, lng:  60.50000},
  {lat: 24.52375, lng:  61.00000},
  {lat: 24.76279, lng:  61.50000},
  {lat: 24.99841, lng:  62.00000},
  {lat: 25.23053, lng:  62.50000},
  {lat: 25.45906, lng:  63.00000},
  {lat: 25.68391, lng:  63.50000},
  {lat: 25.90499, lng:  64.00000},
  {lat: 26.12221, lng:  64.50000},
  {lat: 26.33550, lng:  65.00000},
  {lat: 26.54479, lng:  65.50000},
  {lat: 26.75001, lng:  66.00000},
  {lat: 26.95109, lng:  66.50000},
  {lat: 27.14796, lng:  67.00000},
  {lat: 27.34057, lng:  67.50000},
  {lat: 27.52886, lng:  68.00000},
  {lat: 27.71278, lng:  68.50000},
  {lat: 27.89227, lng:  69.00000},
  {lat: 28.06730, lng:  69.50000},
  {lat: 28.23783, lng:  70.00000},
  {lat: 28.40381, lng:  70.50000},
  {lat: 28.56522, lng:  71.00000},
  {lat: 28.72203, lng:  71.50000},
  {lat: 28.87420, lng:  72.00000},
  {lat: 29.02170, lng:  72.50000},
  {lat: 29.16453, lng:  73.00000},
  {lat: 29.30267, lng:  73.50000},
  {lat: 29.43609, lng:  74.00000},
  {lat: 29.56478, lng:  74.50000},
  {lat: 29.68873, lng:  75.00000},
  {lat: 29.80795, lng:  75.50000},
  {lat: 29.92241, lng:  76.00000},
  {lat: 30.03212, lng:  76.50000},
  {lat: 30.13708, lng:  77.00000},
  {lat: 30.23729, lng:  77.50000},
  {lat: 30.33275, lng:  78.00000},
  {lat: 30.42346, lng:  78.50000},
  {lat: 30.50944, lng:  79.00000},
  {lat: 30.59068, lng:  79.50000},
  {lat: 30.66722, lng:  80.00000},
  {lat: 30.73904, lng:  80.50000},
  {lat: 30.80616, lng:  81.00000},
  {lat: 30.86861, lng:  81.50000},
  {lat: 30.92638, lng:  82.00000},
  {lat: 30.97951, lng:  82.50000},
  {lat: 31.02801, lng:  83.00000},
  {lat: 31.07189, lng:  83.50000},
  {lat: 31.11117, lng:  84.00000},
  {lat: 31.14588, lng:  84.50000},
  {lat: 31.17603, lng:  85.00000},
  {lat: 31.20165, lng:  85.50000},
  {lat: 31.22276, lng:  86.00000},
  {lat: 31.23939, lng:  86.50000},
  {lat: 31.25154, lng:  87.00000},
  {lat: 31.25926, lng:  87.50000},
  {lat: 31.26257, lng:  88.00000},
  {lat: 31.26148, lng:  88.50000},
  {lat: 31.25604, lng:  89.00000},
  {lat: 31.24626, lng:  89.50000},
  {lat: 31.23216, lng:  90.00000},
  {lat: 31.21379, lng:  90.50000},
  {lat: 31.19117, lng:  91.00000},
  {lat: 31.16433, lng:  91.50000},
  {lat: 31.13329, lng:  92.00000},
  {lat: 31.09809, lng:  92.50000},
  {lat: 31.05875, lng:  93.00000},
  {lat: 31.01532, lng:  93.50000},
  {lat: 30.96781, lng:  94.00000},
  {lat: 30.91627, lng:  94.50000},
  {lat: 30.86073, lng:  95.00000},
  {lat: 30.80121, lng:  95.50000},
  {lat: 30.73776, lng:  96.00000},
  {lat: 30.67040, lng:  96.50000},
  {lat: 30.59918, lng:  97.00000},
  {lat: 30.52413, lng:  97.50000},
  {lat: 30.44528, lng:  98.00000},
  {lat: 30.36268, lng:  98.50000},
  {lat: 30.27635, lng:  99.00000},
  {lat: 30.18635, lng:  99.50000},
  {lat: 30.09270, lng: 100.00000},
  {lat: 29.99545, lng: 100.50000},
  {lat: 29.89465, lng: 101.00000},
  {lat: 29.79032, lng: 101.50000},
  {lat: 29.68251, lng: 102.00000},
  {lat: 29.57127, lng: 102.50000},
  {lat: 29.45664, lng: 103.00000},
  {lat: 29.33866, lng: 103.50000},
  {lat: 29.21737, lng: 104.00000},
  {lat: 29.09283, lng: 104.50000},
  {lat: 28.96508, lng: 105.00000},
  {lat: 28.83417, lng: 105.50000},
  {lat: 28.70013, lng: 106.00000},
  {lat: 28.56304, lng: 106.50000},
  {lat: 28.42292, lng: 107.00000},
  {lat: 28.27983, lng: 107.50000},
  {lat: 28.13383, lng: 108.00000},
  {lat: 27.98495, lng: 108.50000},
  {lat: 27.83327, lng: 109.00000},
  {lat: 27.67881, lng: 109.50000},
  {lat: 27.52165, lng: 110.00000},
  {lat: 27.36183, lng: 110.50000},
  {lat: 27.19941, lng: 111.00000},
  {lat: 27.03444, lng: 111.50000},
  {lat: 26.86697, lng: 112.00000},
  {lat: 26.69706, lng: 112.50000},
  {lat: 26.52477, lng: 113.00000},
  {lat: 26.35015, lng: 113.50000},
  {lat: 26.17326, lng: 114.00000},
  {lat: 25.99416, lng: 114.50000},
  {lat: 25.81290, lng: 115.00000},
  {lat: 25.62954, lng: 115.50000},
  {lat: 25.44413, lng: 116.00000},
  {lat: 25.25674, lng: 116.50000},
  {lat: 25.06742, lng: 117.00000},
  {lat: 24.87623, lng: 117.50000},
  {lat: 24.68322, lng: 118.00000},
  {lat: 24.48846, lng: 118.50000},
  {lat: 24.29200, lng: 119.00000},
  {lat: 24.09389, lng: 119.50000},
  {lat: 23.89420, lng: 120.00000},
  {lat: 23.69298, lng: 120.50000},
  {lat: 23.49029, lng: 121.00000},
  {lat: 23.28618, lng: 121.50000},
  {lat: 23.08071, lng: 122.00000},
  {lat: 22.87393, lng: 122.50000},
  {lat: 22.66591, lng: 123.00000},
  {lat: 22.45668, lng: 123.50000},
  {lat: 22.24632, lng: 124.00000},
  {lat: 22.03487, lng: 124.50000},
  {lat: 21.82238, lng: 125.00000},
  {lat: 21.60891, lng: 125.50000},
  {lat: 21.39451, lng: 126.00000},
  {lat: 21.17923, lng: 126.50000},
  {lat: 20.96311, lng: 127.00000},
  {lat: 20.74622, lng: 127.50000},
  {lat: 20.52860, lng: 128.00000},
  {lat: 20.31029, lng: 128.50000},
  {lat: 20.09135, lng: 129.00000},
  {lat: 19.87181, lng: 129.50000},
  {lat: 19.65174, lng: 130.00000},
  {lat: 19.43116, lng: 130.50000},
  {lat: 19.21014, lng: 131.00000},
  {lat: 18.98870, lng: 131.50000},
  {lat: 18.76689, lng: 132.00000},
  {lat: 18.54475, lng: 132.50000},
  {lat: 18.32234, lng: 133.00000},
  {lat: 18.09967, lng: 133.50000},
  {lat: 17.87680, lng: 134.00000},
  {lat: 17.65376, lng: 134.50000},
  {lat: 17.43058, lng: 135.00000},
  {lat: 17.20732, lng: 135.50000},
  {lat: 16.98399, lng: 136.00000},
  {lat: 16.76064, lng: 136.50000},
  {lat: 16.53730, lng: 137.00000},
  {lat: 16.31400, lng: 137.50000},
  {lat: 16.09077, lng: 138.00000},
  {lat: 15.86766, lng: 138.50000},
  {lat: 15.64467, lng: 139.00000},
  {lat: 15.42186, lng: 139.50000},
  {lat: 15.19923, lng: 140.00000},
  {lat: 14.97684, lng: 140.50000},
  {lat: 14.75468, lng: 141.00000},
  {lat: 14.53281, lng: 141.50000},
  {lat: 14.31124, lng: 142.00000},
  {lat: 14.08999, lng: 142.50000},
  {lat: 13.86910, lng: 143.00000},
  {lat: 13.64857, lng: 143.50000},
  {lat: 13.42845, lng: 144.00000},
  {lat: 13.20874, lng: 144.50000},
  {lat: 12.98947, lng: 145.00000},
  {lat: 12.77066, lng: 145.50000},
  {lat: 12.55233, lng: 146.00000},
  {lat: 12.33450, lng: 146.50000},
  {lat: 11.77989, lng: 147.77814},
  {lat: 11.16129, lng: 147.39532}
]

const pathCoordsB2 = [
  {lat:  0.93574, lng:  17.99475},
  {lat:  0.93777, lng:  18.00000},
  {lat:  1.15973, lng:  18.50000},
  {lat:  1.38339, lng:  19.00000},
  {lat:  1.60877, lng:  19.50000},
  {lat:  1.83586, lng:  20.00000},
  {lat:  2.06469, lng:  20.50000},
  {lat:  2.29523, lng:  21.00000},
  {lat:  2.52751, lng:  21.50000},
  {lat:  2.76150, lng:  22.00000},
  {lat:  2.99723, lng:  22.50000},
  {lat:  3.23470, lng:  23.00000},
  {lat:  3.47389, lng:  23.50000},
  {lat:  3.71481, lng:  24.00000},
  {lat:  3.95747, lng:  24.50000},
  {lat:  4.20184, lng:  25.00000},
  {lat:  4.44795, lng:  25.50000},
  {lat:  4.69578, lng:  26.00000},
  {lat:  4.94533, lng:  26.50000},
  {lat:  5.19657, lng:  27.00000},
  {lat:  5.44954, lng:  27.50000},
  {lat:  5.70420, lng:  28.00000},
  {lat:  5.96053, lng:  28.50000},
  {lat:  6.21855, lng:  29.00000},
  {lat:  6.47824, lng:  29.50000},
  {lat:  6.73958, lng:  30.00000},
  {lat:  7.00256, lng:  30.50000},
  {lat:  7.26717, lng:  31.00000},
  {lat:  7.53339, lng:  31.50000},
  {lat:  7.80119, lng:  32.00000},
  {lat:  8.07057, lng:  32.50000},
  {lat:  8.34149, lng:  33.00000},
  {lat:  8.61395, lng:  33.50000},
  {lat:  8.88789, lng:  34.00000},
  {lat:  9.16332, lng:  34.50000},
  {lat:  9.44018, lng:  35.00000},
  {lat:  9.71847, lng:  35.50000},
  {lat:  9.99811, lng:  36.00000},
  {lat: 10.27912, lng:  36.50000},
  {lat: 10.56141, lng:  37.00000},
  {lat: 10.84497, lng:  37.50000},
  {lat: 11.12976, lng:  38.00000},
  {lat: 11.41572, lng:  38.50000},
  {lat: 11.70279, lng:  39.00000},
  {lat: 11.99095, lng:  39.50000},
  {lat: 12.28012, lng:  40.00000},
  {lat: 12.57026, lng:  40.50000},
  {lat: 12.86131, lng:  41.00000},
  {lat: 13.15318, lng:  41.50000},
  {lat: 13.44584, lng:  42.00000},
  {lat: 13.73921, lng:  42.50000},
  {lat: 14.03321, lng:  43.00000},
  {lat: 14.32778, lng:  43.50000},
  {lat: 14.62282, lng:  44.00000},
  {lat: 14.91827, lng:  44.50000},
  {lat: 15.21404, lng:  45.00000},
  {lat: 15.51002, lng:  45.50000},
  {lat: 15.80617, lng:  46.00000},
  {lat: 16.10235, lng:  46.50000},
  {lat: 16.39847, lng:  47.00000},
  {lat: 16.69446, lng:  47.50000},
  {lat: 16.99019, lng:  48.00000},
  {lat: 17.28556, lng:  48.50000},
  {lat: 17.58048, lng:  49.00000},
  {lat: 17.87482, lng:  49.50000},
  {lat: 18.16847, lng:  50.00000},
  {lat: 18.46134, lng:  50.50000},
  {lat: 18.75328, lng:  51.00000},
  {lat: 19.04417, lng:  51.50000},
  {lat: 19.33394, lng:  52.00000},
  {lat: 19.62241, lng:  52.50000},
  {lat: 19.90949, lng:  53.00000},
  {lat: 20.19504, lng:  53.50000},
  {lat: 20.47896, lng:  54.00000},
  {lat: 20.76110, lng:  54.50000},
  {lat: 21.04135, lng:  55.00000},
  {lat: 21.31958, lng:  55.50000},
  {lat: 21.59566, lng:  56.00000},
  {lat: 21.86947, lng:  56.50000},
  {lat: 22.14090, lng:  57.00000},
  {lat: 22.40980, lng:  57.50000},
  {lat: 22.67607, lng:  58.00000},
  {lat: 22.93960, lng:  58.50000},
  {lat: 23.20024, lng:  59.00000},
  {lat: 23.45789, lng:  59.50000},
  {lat: 23.71244, lng:  60.00000},
  {lat: 23.96379, lng:  60.50000},
  {lat: 24.21182, lng:  61.00000},
  {lat: 24.45642, lng:  61.50000},
  {lat: 24.69750, lng:  62.00000},
  {lat: 24.93494, lng:  62.50000},
  {lat: 25.16867, lng:  63.00000},
  {lat: 25.39861, lng:  63.50000},
  {lat: 25.62463, lng:  64.00000},
  {lat: 25.84666, lng:  64.50000},
  {lat: 26.06466, lng:  65.00000},
  {lat: 26.27850, lng:  65.50000},
  {lat: 26.48812, lng:  66.00000},
  {lat: 26.69349, lng:  66.50000},
  {lat: 26.89450, lng:  67.00000},
  {lat: 27.09111, lng:  67.50000},
  {lat: 27.28327, lng:  68.00000},
  {lat: 27.47092, lng:  68.50000},
  {lat: 27.65401, lng:  69.00000},
  {lat: 27.83249, lng:  69.50000},
  {lat: 28.00633, lng:  70.00000},
  {lat: 28.17549, lng:  70.50000},
  {lat: 28.33993, lng:  71.00000},
  {lat: 28.49964, lng:  71.50000},
  {lat: 28.65456, lng:  72.00000},
  {lat: 28.80469, lng:  72.50000},
  {lat: 28.95002, lng:  73.00000},
  {lat: 29.09050, lng:  73.50000},
  {lat: 29.22614, lng:  74.00000},
  {lat: 29.35692, lng:  74.50000},
  {lat: 29.48283, lng:  75.00000},
  {lat: 29.60387, lng:  75.50000},
  {lat: 29.72003, lng:  76.00000},
  {lat: 29.83131, lng:  76.50000},
  {lat: 29.93770, lng:  77.00000},
  {lat: 30.03922, lng:  77.50000},
  {lat: 30.13587, lng:  78.00000},
  {lat: 30.22765, lng:  78.50000},
  {lat: 30.31457, lng:  79.00000},
  {lat: 30.39664, lng:  79.50000},
  {lat: 30.47388, lng:  80.00000},
  {lat: 30.54628, lng:  80.50000},
  {lat: 30.61388, lng:  81.00000},
  {lat: 30.67667, lng:  81.50000},
  {lat: 30.73468, lng:  82.00000},
  {lat: 30.78793, lng:  82.50000},
  {lat: 30.83643, lng:  83.00000},
  {lat: 30.88021, lng:  83.50000},
  {lat: 30.91928, lng:  84.00000},
  {lat: 30.95366, lng:  84.50000},
  {lat: 30.98337, lng:  85.00000},
  {lat: 31.00844, lng:  85.50000},
  {lat: 31.02890, lng:  86.00000},
  {lat: 31.04476, lng:  86.50000},
  {lat: 31.05605, lng:  87.00000},
  {lat: 31.06279, lng:  87.50000},
  {lat: 31.06501, lng:  88.00000},
  {lat: 31.06274, lng:  88.50000},
  {lat: 31.05600, lng:  89.00000},
  {lat: 31.04482, lng:  89.50000},
  {lat: 31.02922, lng:  90.00000},
  {lat: 31.00925, lng:  90.50000},
  {lat: 30.98492, lng:  91.00000},
  {lat: 30.95626, lng:  91.50000},
  {lat: 30.92332, lng:  92.00000},
  {lat: 30.88610, lng:  92.50000},
  {lat: 30.84465, lng:  93.00000},
  {lat: 30.79900, lng:  93.50000},
  {lat: 30.74918, lng:  94.00000},
  {lat: 30.69522, lng:  94.50000},
  {lat: 30.63716, lng:  95.00000},
  {lat: 30.57503, lng:  95.50000},
  {lat: 30.50886, lng:  96.00000},
  {lat: 30.43869, lng:  96.50000},
  {lat: 30.36456, lng:  97.00000},
  {lat: 30.28650, lng:  97.50000},
  {lat: 30.20455, lng:  98.00000},
  {lat: 30.11874, lng:  98.50000},
  {lat: 30.02912, lng:  99.00000},
  {lat: 29.93572, lng:  99.50000},
  {lat: 29.83859, lng: 100.00000},
  {lat: 29.73776, lng: 100.50000},
  {lat: 29.63328, lng: 101.00000},
  {lat: 29.52518, lng: 101.50000},
  {lat: 29.41351, lng: 102.00000},
  {lat: 29.29832, lng: 102.50000},
  {lat: 29.17965, lng: 103.00000},
  {lat: 29.05754, lng: 103.50000},
  {lat: 28.93203, lng: 104.00000},
  {lat: 28.80319, lng: 104.50000},
  {lat: 28.67105, lng: 105.00000},
  {lat: 28.53565, lng: 105.50000},
  {lat: 28.39706, lng: 106.00000},
  {lat: 28.25532, lng: 106.50000},
  {lat: 28.11048, lng: 107.00000},
  {lat: 27.96259, lng: 107.50000},
  {lat: 27.81171, lng: 108.00000},
  {lat: 27.65788, lng: 108.50000},
  {lat: 27.50116, lng: 109.00000},
  {lat: 27.34161, lng: 109.50000},
  {lat: 27.17927, lng: 110.00000},
  {lat: 27.01421, lng: 110.50000},
  {lat: 26.84647, lng: 111.00000},
  {lat: 26.67612, lng: 111.50000},
  {lat: 26.50322, lng: 112.00000},
  {lat: 26.32780, lng: 112.50000},
  {lat: 26.14995, lng: 113.00000},
  {lat: 25.96972, lng: 113.50000},
  {lat: 25.78716, lng: 114.00000},
  {lat: 25.60233, lng: 114.50000},
  {lat: 25.41529, lng: 115.00000},
  {lat: 25.22610, lng: 115.50000},
  {lat: 25.03482, lng: 116.00000},
  {lat: 24.84151, lng: 116.50000},
  {lat: 24.64622, lng: 117.00000},
  {lat: 24.44903, lng: 117.50000},
  {lat: 24.24999, lng: 118.00000},
  {lat: 24.04915, lng: 118.50000},
  {lat: 23.84659, lng: 119.00000},
  {lat: 23.64235, lng: 119.50000},
  {lat: 23.43649, lng: 120.00000},
  {lat: 23.22908, lng: 120.50000},
  {lat: 23.02018, lng: 121.00000},
  {lat: 22.80984, lng: 121.50000},
  {lat: 22.59811, lng: 122.00000},
  {lat: 22.38507, lng: 122.50000},
  {lat: 22.17076, lng: 123.00000},
  {lat: 21.95525, lng: 123.50000},
  {lat: 21.73858, lng: 124.00000},
  {lat: 21.52081, lng: 124.50000},
  {lat: 21.30201, lng: 125.00000},
  {lat: 21.08222, lng: 125.50000},
  {lat: 20.86149, lng: 126.00000},
  {lat: 20.63989, lng: 126.50000},
  {lat: 20.41745, lng: 127.00000},
  {lat: 20.19424, lng: 127.50000},
  {lat: 19.97031, lng: 128.00000},
  {lat: 19.74570, lng: 128.50000},
  {lat: 19.52047, lng: 129.00000},
  {lat: 19.29465, lng: 129.50000},
  {lat: 19.06830, lng: 130.00000},
  {lat: 18.84148, lng: 130.50000},
  {lat: 18.61421, lng: 131.00000},
  {lat: 18.38655, lng: 131.50000},
  {lat: 18.15855, lng: 132.00000},
  {lat: 17.93023, lng: 132.50000},
  {lat: 17.70166, lng: 133.00000},
  {lat: 17.47285, lng: 133.50000},
  {lat: 17.24387, lng: 134.00000},
  {lat: 17.01474, lng: 134.50000},
  {lat: 16.78551, lng: 135.00000},
  {lat: 16.55621, lng: 135.50000},
  {lat: 16.32689, lng: 136.00000},
  {lat: 16.09756, lng: 136.50000},
  {lat: 15.86828, lng: 137.00000},
  {lat: 15.63907, lng: 137.50000},
  {lat: 15.40997, lng: 138.00000},
  {lat: 15.18100, lng: 138.50000},
  {lat: 14.95220, lng: 139.00000},
  {lat: 14.72361, lng: 139.50000},
  {lat: 14.49524, lng: 140.00000},
  {lat: 14.26713, lng: 140.50000},
  {lat: 14.03931, lng: 141.00000},
  {lat: 13.81180, lng: 141.50000},
  {lat: 13.58462, lng: 142.00000},
  {lat: 13.35781, lng: 142.50000},
  {lat: 13.13140, lng: 143.00000},
  {lat: 12.90538, lng: 143.50000},
  {lat: 12.67981, lng: 144.00000},
  {lat: 12.45469, lng: 144.50000},
  {lat: 12.23005, lng: 145.00000},
  {lat: 12.00591, lng: 145.50000},
  {lat: 11.78228, lng: 146.00000},
  {lat: 11.55920, lng: 146.50000},
  {lat: 11.16129, lng: 147.39532}
]

const pathCoordsR1 = [
 {lat:  1.26844, lng:  17.79639},
 {lat:  1.26844, lng:  17.79638},
 {lat:  1.35740, lng:  18.00000},
 {lat:  1.57715, lng:  18.50000},
 {lat:  1.79858, lng:  19.00000},
 {lat:  2.02170, lng:  19.50000},
 {lat:  2.24653, lng:  20.00000},
 {lat:  2.47304, lng:  20.50000},
 {lat:  2.70126, lng:  21.00000},
 {lat:  2.93118, lng:  21.50000},
 {lat:  3.16280, lng:  22.00000},
 {lat:  3.39614, lng:  22.50000},
 {lat:  3.63119, lng:  23.00000},
 {lat:  3.86794, lng:  23.50000},
 {lat:  4.10639, lng:  24.00000},
 {lat:  4.34654, lng:  24.50000},
 {lat:  4.58841, lng:  25.00000},
 {lat:  4.83197, lng:  25.50000},
 {lat:  5.07723, lng:  26.00000},
 {lat:  5.32418, lng:  26.50000},
 {lat:  5.57280, lng:  27.00000},
 {lat:  5.82311, lng:  27.50000},
 {lat:  6.07509, lng:  28.00000},
 {lat:  6.32873, lng:  28.50000},
 {lat:  6.58402, lng:  29.00000},
 {lat:  6.84095, lng:  29.50000},
 {lat:  7.09951, lng:  30.00000},
 {lat:  7.35967, lng:  30.50000},
 {lat:  7.62145, lng:  31.00000},
 {lat:  7.88479, lng:  31.50000},
 {lat:  8.14971, lng:  32.00000},
 {lat:  8.41616, lng:  32.50000},
 {lat:  8.68413, lng:  33.00000},
 {lat:  8.95360, lng:  33.50000},
 {lat:  9.22455, lng:  34.00000},
 {lat:  9.49693, lng:  34.50000},
 {lat:  9.77074, lng:  35.00000},
 {lat: 10.04592, lng:  35.50000},
 {lat: 10.32245, lng:  36.00000},
 {lat: 10.60029, lng:  36.50000},
 {lat: 10.87943, lng:  37.00000},
 {lat: 11.15979, lng:  37.50000},
 {lat: 11.44134, lng:  38.00000},
 {lat: 11.72405, lng:  38.50000},
 {lat: 12.00785, lng:  39.00000},
 {lat: 12.29270, lng:  39.50000},
 {lat: 12.57856, lng:  40.00000},
 {lat: 12.86535, lng:  40.50000},
 {lat: 13.15302, lng:  41.00000},
 {lat: 13.44151, lng:  41.50000},
 {lat: 13.73075, lng:  42.00000},
 {lat: 14.02068, lng:  42.50000},
 {lat: 14.31124, lng:  43.00000},
 {lat: 14.60232, lng:  43.50000},
 {lat: 14.89388, lng:  44.00000},
 {lat: 15.18582, lng:  44.50000},
 {lat: 15.47807, lng:  45.00000},
 {lat: 15.77053, lng:  45.50000},
 {lat: 16.06312, lng:  46.00000},
 {lat: 16.35575, lng:  46.50000},
 {lat: 16.64832, lng:  47.00000},
 {lat: 16.94074, lng:  47.50000},
 {lat: 17.23291, lng:  48.00000},
 {lat: 17.52471, lng:  48.50000},
 {lat: 17.81606, lng:  49.00000},
 {lat: 18.10685, lng:  49.50000},
 {lat: 18.39694, lng:  50.00000},
 {lat: 18.68624, lng:  50.50000},
 {lat: 18.97463, lng:  51.00000},
 {lat: 19.26200, lng:  51.50000},
 {lat: 19.54824, lng:  52.00000},
 {lat: 19.83322, lng:  52.50000},
 {lat: 20.11681, lng:  53.00000},
 {lat: 20.39891, lng:  53.50000},
 {lat: 20.67938, lng:  54.00000},
 {lat: 20.95811, lng:  54.50000},
 {lat: 21.23498, lng:  55.00000},
 {lat: 21.50985, lng:  55.50000},
 {lat: 21.78263, lng:  56.00000},
 {lat: 22.05315, lng:  56.50000},
 {lat: 22.32133, lng:  57.00000},
 {lat: 22.58703, lng:  57.50000},
 {lat: 22.85015, lng:  58.00000},
 {lat: 23.11055, lng:  58.50000},
 {lat: 23.36814, lng:  59.00000},
 {lat: 23.62277, lng:  59.50000},
 {lat: 23.87437, lng:  60.00000},
 {lat: 24.12280, lng:  60.50000},
 {lat: 24.36798, lng:  61.00000},
 {lat: 24.60978, lng:  61.50000},
 {lat: 24.84812, lng:  62.00000},
 {lat: 25.08290, lng:  62.50000},
 {lat: 25.31401, lng:  63.00000},
 {lat: 25.54139, lng:  63.50000},
 {lat: 25.76494, lng:  64.00000},
 {lat: 25.98455, lng:  64.50000},
 {lat: 26.20019, lng:  65.00000},
 {lat: 26.41174, lng:  65.50000},
 {lat: 26.61916, lng:  66.00000},
 {lat: 26.82236, lng:  66.50000},
 {lat: 27.02130, lng:  67.00000},
 {lat: 27.21591, lng:  67.50000},
 {lat: 27.40611, lng:  68.00000},
 {lat: 27.59189, lng:  68.50000},
 {lat: 27.77318, lng:  69.00000},
 {lat: 27.94993, lng:  69.50000},
 {lat: 28.12210, lng:  70.00000},
 {lat: 28.28967, lng:  70.50000},
 {lat: 28.45259, lng:  71.00000},
 {lat: 28.61084, lng:  71.50000},
 {lat: 28.76438, lng:  72.00000},
 {lat: 28.91320, lng:  72.50000},
 {lat: 29.05726, lng:  73.00000},
 {lat: 29.19657, lng:  73.50000},
 {lat: 29.33109, lng:  74.00000},
 {lat: 29.46082, lng:  74.50000},
 {lat: 29.58575, lng:  75.00000},
 {lat: 29.70587, lng:  75.50000},
 {lat: 29.82118, lng:  76.00000},
 {lat: 29.93167, lng:  76.50000},
 {lat: 30.03735, lng:  77.00000},
 {lat: 30.13821, lng:  77.50000},
 {lat: 30.23426, lng:  78.00000},
 {lat: 30.32550, lng:  78.50000},
 {lat: 30.41195, lng:  79.00000},
 {lat: 30.49361, lng:  79.50000},
 {lat: 30.51945, lng:  79.66461},
 {lat: 30.57049, lng:  80.00000},
 {lat: 30.64260, lng:  80.50000},
 {lat: 30.70996, lng:  81.00000},
 {lat: 30.77258, lng:  81.50000},
 {lat: 30.83047, lng:  82.00000},
 {lat: 30.88366, lng:  82.50000},
 {lat: 30.93216, lng:  83.00000},
 {lat: 30.97598, lng:  83.50000},
 {lat: 31.01516, lng:  84.00000},
 {lat: 31.04970, lng:  84.50000},
 {lat: 31.07964, lng:  85.00000},
 {lat: 31.10498, lng:  85.50000},
 {lat: 31.12576, lng:  86.00000},
 {lat: 31.14201, lng:  86.50000},
 {lat: 31.15373, lng:  87.00000},
 {lat: 31.16096, lng:  87.50000},
 {lat: 31.16372, lng:  88.00000},
 {lat: 31.16205, lng:  88.50000},
 {lat: 31.15595, lng:  89.00000},
 {lat: 31.14547, lng:  89.50000},
 {lat: 31.13063, lng:  90.00000},
 {lat: 31.11146, lng:  90.50000},
 {lat: 31.08799, lng:  91.00000},
 {lat: 31.06024, lng:  91.50000},
 {lat: 31.02825, lng:  92.00000},
 {lat: 30.99204, lng:  92.50000},
 {lat: 30.95165, lng:  93.00000},
 {lat: 30.90711, lng:  93.50000},
 {lat: 30.85845, lng:  94.00000},
 {lat: 30.80571, lng:  94.50000},
 {lat: 30.74891, lng:  95.00000},
 {lat: 30.68809, lng:  95.50000},
 {lat: 30.62328, lng:  96.00000},
 {lat: 30.55452, lng:  96.50000},
 {lat: 30.48185, lng:  97.00000},
 {lat: 30.40529, lng:  97.50000},
 {lat: 30.32490, lng:  98.00000},
 {lat: 30.24070, lng:  98.50000},
 {lat: 30.15273, lng:  99.00000},
 {lat: 30.06103, lng:  99.50000},
 {lat: 29.96565, lng: 100.00000},
 {lat: 29.86662, lng: 100.50000},
 {lat: 29.76397, lng: 101.00000},
 {lat: 29.65777, lng: 101.50000},
 {lat: 29.54804, lng: 102.00000},
 {lat: 29.43483, lng: 102.50000},
 {lat: 29.31818, lng: 103.00000},
 {lat: 29.19814, lng: 103.50000},
 {lat: 29.07475, lng: 104.00000},
 {lat: 28.94807, lng: 104.50000},
 {lat: 28.81813, lng: 105.00000},
 {lat: 28.68498, lng: 105.50000},
 {lat: 28.54868, lng: 106.00000},
 {lat: 28.40927, lng: 106.50000},
 {lat: 28.26680, lng: 107.00000},
 {lat: 28.12132, lng: 107.50000},
 {lat: 27.97288, lng: 108.00000},
 {lat: 27.82154, lng: 108.50000},
 {lat: 27.66734, lng: 109.00000},
 {lat: 27.51035, lng: 109.50000},
 {lat: 27.35061, lng: 110.00000},
 {lat: 27.18817, lng: 110.50000},
 {lat: 27.02311, lng: 111.00000},
 {lat: 26.85545, lng: 111.50000},
 {lat: 26.68527, lng: 112.00000},
 {lat: 26.51263, lng: 112.50000},
 {lat: 26.33757, lng: 113.00000},
 {lat: 26.16015, lng: 113.50000},
 {lat: 25.98043, lng: 114.00000},
 {lat: 25.79848, lng: 114.50000},
 {lat: 25.61433, lng: 115.00000},
 {lat: 25.42807, lng: 115.50000},
 {lat: 25.23974, lng: 116.00000},
 {lat: 25.04939, lng: 116.50000},
 {lat: 24.85710, lng: 117.00000},
 {lat: 24.66292, lng: 117.50000},
 {lat: 24.46691, lng: 118.00000},
 {lat: 24.26912, lng: 118.50000},
 {lat: 24.06961, lng: 119.00000},
 {lat: 23.86845, lng: 119.50000},
 {lat: 23.66569, lng: 120.00000},
 {lat: 23.46138, lng: 120.50000},
 {lat: 23.25559, lng: 121.00000},
 {lat: 23.04838, lng: 121.50000},
 {lat: 22.83979, lng: 122.00000},
 {lat: 22.62989, lng: 122.50000},
 {lat: 22.41874, lng: 123.00000},
 {lat: 22.20638, lng: 123.50000},
 {lat: 21.99287, lng: 124.00000},
 {lat: 21.77827, lng: 124.50000},
 {lat: 21.56263, lng: 125.00000},
 {lat: 21.34601, lng: 125.50000},
 {lat: 21.12846, lng: 126.00000},
 {lat: 20.91002, lng: 126.50000},
 {lat: 20.69076, lng: 127.00000},
 {lat: 20.47071, lng: 127.50000},
 {lat: 20.24994, lng: 128.00000},
 {lat: 20.02849, lng: 128.50000},
 {lat: 19.80640, lng: 129.00000},
 {lat: 19.58374, lng: 129.50000},
 {lat: 19.36053, lng: 130.00000},
 {lat: 19.13684, lng: 130.50000},
 {lat: 18.91270, lng: 131.00000},
 {lat: 18.68816, lng: 131.50000},
 {lat: 18.46325, lng: 132.00000},
 {lat: 18.23804, lng: 132.50000},
 {lat: 18.01254, lng: 133.00000},
 {lat: 17.78681, lng: 133.50000},
 {lat: 17.56089, lng: 134.00000},
 {lat: 17.33481, lng: 134.50000},
 {lat: 17.10861, lng: 135.00000},
 {lat: 16.88234, lng: 135.50000},
 {lat: 16.65602, lng: 136.00000},
 {lat: 16.42968, lng: 136.50000},
 {lat: 16.20337, lng: 137.00000},
 {lat: 15.97712, lng: 137.50000},
 {lat: 15.75096, lng: 138.00000},
 {lat: 15.52492, lng: 138.50000},
 {lat: 15.29903, lng: 139.00000},
 {lat: 15.07333, lng: 139.50000},
 {lat: 14.84784, lng: 140.00000},
 {lat: 14.62259, lng: 140.50000},
 {lat: 14.39760, lng: 141.00000},
 {lat: 14.17291, lng: 141.50000},
 {lat: 13.94854, lng: 142.00000},
 {lat: 13.72451, lng: 142.50000},
 {lat: 13.50085, lng: 143.00000},
 {lat: 13.27759, lng: 143.50000},
 {lat: 13.05474, lng: 144.00000},
 {lat: 12.83232, lng: 144.50000},
 {lat: 12.61037, lng: 145.00000},
 {lat: 12.38889, lng: 145.50000},
 {lat: 12.16792, lng: 146.00000},
 {lat: 11.94746, lng: 146.50000},
 {lat: 11.47037, lng: 147.58630}
]

export default {
  name: '2020-06-21',
  date: new Date('2020-06-21'),
  elements,
  pathCoordsB1,
  pathCoordsB2,
  pathCoordsR1,
}