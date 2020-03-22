const elements = new Array(
//*** #0U - Input Besselian Elements here
2460409.262835,  18.0,  -4.0,   4.0,    70.6,
   -0.31815711,    0.51171052,    0.00003265,   -0.00000852,
    0.21974689,    0.27095860,   -0.00005943,   -0.00000467,
    7.58619928,    0.01484434,   -0.00000168,
   89.59121704,   15.00408363,   -0.00000130,
    0.53581262,    0.00006179,   -0.00001275,
   -0.01027351,    0.00006148,   -0.00001269,
    0.00466826,    0.00464501
)

const pathCoordsB1 = [
  {lat:  -8.45393, lng: -158.33575},
  {lat:  -7.19340, lng: -158.73138},
  {lat:  -7.16096, lng: -158.50000},
  {lat:  -7.08903, lng: -158.00000},
  {lat:  -7.01452, lng: -157.50000},
  {lat:  -6.93738, lng: -157.00000},
  {lat:  -6.85757, lng: -156.50000},
  {lat:  -6.77506, lng: -156.00000},
  {lat:  -6.68981, lng: -155.50000},
  {lat:  -6.60179, lng: -155.00000},
  {lat:  -6.51096, lng: -154.50000},
  {lat:  -6.41727, lng: -154.00000},
  {lat:  -6.32069, lng: -153.50000},
  {lat:  -6.22118, lng: -153.00000},
  {lat:  -6.11869, lng: -152.50000},
  {lat:  -6.01318, lng: -152.00000},
  {lat:  -5.90459, lng: -151.50000},
  {lat:  -5.79290, lng: -151.00000},
  {lat:  -5.67805, lng: -150.50000},
  {lat:  -5.55999, lng: -150.00000},
  {lat:  -5.43868, lng: -149.50000},
  {lat:  -5.31406, lng: -149.00000},
  {lat:  -5.18607, lng: -148.50000},
  {lat:  -5.05468, lng: -148.00000},
  {lat:  -4.91982, lng: -147.50000},
  {lat:  -4.78144, lng: -147.00000},
  {lat:  -4.63947, lng: -146.50000},
  {lat:  -4.49388, lng: -146.00000},
  {lat:  -4.34457, lng: -145.50000},
  {lat:  -4.19151, lng: -145.00000},
  {lat:  -4.03463, lng: -144.50000},
  {lat:  -3.87384, lng: -144.00000},
  {lat:  -3.70911, lng: -143.50000},
  {lat:  -3.54036, lng: -143.00000},
  {lat:  -3.36750, lng: -142.50000},
  {lat:  -3.19048, lng: -142.00000},
  {lat:  -3.00922, lng: -141.50000},
  {lat:  -2.82364, lng: -141.00000},
  {lat:  -2.63367, lng: -140.50000},
  {lat:  -2.43924, lng: -140.00000},
  {lat:  -2.24025, lng: -139.50000},
  {lat:  -2.03662, lng: -139.00000},
  {lat:  -1.82826, lng: -138.50000},
  {lat:  -1.61510, lng: -138.00000},
  {lat:  -1.39705, lng: -137.50000},
  {lat:  -1.17400, lng: -137.00000},
  {lat:  -0.94588, lng: -136.50000},
  {lat:  -0.71259, lng: -136.00000},
  {lat:  -0.47403, lng: -135.50000},
  {lat:  -0.23010, lng: -135.00000},
  {lat:   0.01931, lng: -134.50000},
  {lat:   0.27427, lng: -134.00000},
  {lat:   0.53490, lng: -133.50000},
  {lat:   0.80132, lng: -133.00000},
  {lat:   1.07362, lng: -132.50000},
  {lat:   1.35190, lng: -132.00000},
  {lat:   1.63628, lng: -131.50000},
  {lat:   1.92686, lng: -131.00000},
  {lat:   2.22376, lng: -130.50000},
  {lat:   2.52708, lng: -130.00000},
  {lat:   2.83693, lng: -129.50000},
  {lat:   3.15342, lng: -129.00000},
  {lat:   3.47665, lng: -128.50000},
  {lat:   3.80673, lng: -128.00000},
  {lat:   4.14377, lng: -127.50000},
  {lat:   4.48785, lng: -127.00000},
  {lat:   4.83910, lng: -126.50000},
  {lat:   5.19759, lng: -126.00000},
  {lat:   5.56341, lng: -125.50000},
  {lat:   5.93665, lng: -125.00000},
  {lat:   6.31737, lng: -124.50000},
  {lat:   6.70563, lng: -124.00000},
  {lat:   7.10153, lng: -123.50000},
  {lat:   7.50508, lng: -123.00000},
  {lat:   7.91629, lng: -122.50000},
  {lat:   8.33525, lng: -122.00000},
  {lat:   8.76191, lng: -121.50000},
  {lat:   9.19625, lng: -121.00000},
  {lat:   9.63830, lng: -120.50000},
  {lat:  10.08792, lng: -120.00000},
  {lat:  10.54513, lng: -119.50000},
  {lat:  11.00975, lng: -119.00000},
  {lat:  11.48173, lng: -118.50000},
  {lat:  11.96086, lng: -118.00000},
  {lat:  12.44696, lng: -117.50000},
  {lat:  12.93987, lng: -117.00000},
  {lat:  13.43928, lng: -116.50000},
  {lat:  13.94498, lng: -116.00000},
  {lat:  14.45663, lng: -115.50000},
  {lat:  14.97387, lng: -115.00000},
  {lat:  15.49636, lng: -114.50000},
  {lat:  16.02368, lng: -114.00000},
  {lat:  16.55540, lng: -113.50000},
  {lat:  17.09103, lng: -113.00000},
  {lat:  17.63008, lng: -112.50000},
  {lat:  18.17203, lng: -112.00000},
  {lat:  18.71638, lng: -111.50000},
  {lat:  19.26252, lng: -111.00000},
  {lat:  19.80990, lng: -110.50000},
  {lat:  20.35790, lng: -110.00000},
  {lat:  20.90598, lng: -109.50000},
  {lat:  21.45355, lng: -109.00000},
  {lat:  22.00000, lng: -108.50000},
  {lat:  22.54476, lng: -108.00000},
  {lat:  23.08729, lng: -107.50000},
  {lat:  23.62701, lng: -107.00000},
  {lat:  24.16342, lng: -106.50000},
  {lat:  24.69600, lng: -106.00000},
  {lat:  25.22431, lng: -105.50000},
  {lat:  25.74787, lng: -105.00000},
  {lat:  26.26630, lng: -104.50000},
  {lat:  26.77919, lng: -104.00000},
  {lat:  27.28621, lng: -103.50000},
  {lat:  27.78704, lng: -103.00000},
  {lat:  28.28142, lng: -102.50000},
  {lat:  28.76907, lng: -102.00000},
  {lat:  29.24980, lng: -101.50000},
  {lat:  29.72342, lng: -101.00000},
  {lat:  30.18976, lng: -100.50000},
  {lat:  30.64872, lng: -100.00000},
  {lat:  31.10017, lng:  -99.50000},
  {lat:  31.54406, lng:  -99.00000},
  {lat:  31.98034, lng:  -98.50000},
  {lat:  32.40895, lng:  -98.00000},
  {lat:  32.82991, lng:  -97.50000},
  {lat:  33.24321, lng:  -97.00000},
  {lat:  33.64887, lng:  -96.50000},
  {lat:  34.04693, lng:  -96.00000},
  {lat:  34.43743, lng:  -95.50000},
  {lat:  34.82044, lng:  -95.00000},
  {lat:  35.19602, lng:  -94.50000},
  {lat:  35.56425, lng:  -94.00000},
  {lat:  35.92522, lng:  -93.50000},
  {lat:  36.27901, lng:  -93.00000},
  {lat:  36.62572, lng:  -92.50000},
  {lat:  36.96546, lng:  -92.00000},
  {lat:  37.29832, lng:  -91.50000},
  {lat:  37.62441, lng:  -91.00000},
  {lat:  37.94385, lng:  -90.50000},
  {lat:  38.25673, lng:  -90.00000},
  {lat:  38.56318, lng:  -89.50000},
  {lat:  38.86330, lng:  -89.00000},
  {lat:  39.15722, lng:  -88.50000},
  {lat:  39.44502, lng:  -88.00000},
  {lat:  39.72683, lng:  -87.50000},
  {lat:  40.00277, lng:  -87.00000},
  {lat:  40.27293, lng:  -86.50000},
  {lat:  40.53743, lng:  -86.00000},
  {lat:  40.79638, lng:  -85.50000},
  {lat:  41.04987, lng:  -85.00000},
  {lat:  41.29802, lng:  -84.50000},
  {lat:  41.54092, lng:  -84.00000},
  {lat:  41.77868, lng:  -83.50000},
  {lat:  42.01139, lng:  -83.00000},
  {lat:  42.23915, lng:  -82.50000},
  {lat:  42.46204, lng:  -82.00000},
  {lat:  42.68018, lng:  -81.50000},
  {lat:  42.89364, lng:  -81.00000},
  {lat:  43.10251, lng:  -80.50000},
  {lat:  43.30688, lng:  -80.00000},
  {lat:  43.50683, lng:  -79.50000},
  {lat:  43.70244, lng:  -79.00000},
  {lat:  43.89380, lng:  -78.50000},
  {lat:  44.08098, lng:  -78.00000},
  {lat:  44.26405, lng:  -77.50000},
  {lat:  44.44310, lng:  -77.00000},
  {lat:  44.61819, lng:  -76.50000},
  {lat:  44.78939, lng:  -76.00000},
  {lat:  44.95677, lng:  -75.50000},
  {lat:  45.12040, lng:  -75.00000},
  {lat:  45.28034, lng:  -74.50000},
  {lat:  45.43665, lng:  -74.00000},
  {lat:  45.58940, lng:  -73.50000},
  {lat:  45.73865, lng:  -73.00000},
  {lat:  45.88445, lng:  -72.50000},
  {lat:  46.02687, lng:  -72.00000},
  {lat:  46.16594, lng:  -71.50000},
  {lat:  46.30174, lng:  -71.00000},
  {lat:  46.43430, lng:  -70.50000},
  {lat:  46.56369, lng:  -70.00000},
  {lat:  46.68995, lng:  -69.50000},
  {lat:  46.81313, lng:  -69.00000},
  {lat:  46.93327, lng:  -68.50000},
  {lat:  47.05043, lng:  -68.00000},
  {lat:  47.16463, lng:  -67.50000},
  {lat:  47.27594, lng:  -67.00000},
  {lat:  47.38438, lng:  -66.50000},
  {lat:  47.49000, lng:  -66.00000},
  {lat:  47.59285, lng:  -65.50000},
  {lat:  47.69295, lng:  -65.00000},
  {lat:  47.79034, lng:  -64.50000},
  {lat:  47.88507, lng:  -64.00000},
  {lat:  47.97716, lng:  -63.50000},
  {lat:  48.06665, lng:  -63.00000},
  {lat:  48.15358, lng:  -62.50000},
  {lat:  48.23798, lng:  -62.00000},
  {lat:  48.31987, lng:  -61.50000},
  {lat:  48.39929, lng:  -61.00000},
  {lat:  48.47628, lng:  -60.50000},
  {lat:  48.55085, lng:  -60.00000},
  {lat:  48.62304, lng:  -59.50000},
  {lat:  48.69287, lng:  -59.00000},
  {lat:  48.76037, lng:  -58.50000},
  {lat:  48.82557, lng:  -58.00000},
  {lat:  48.88850, lng:  -57.50000},
  {lat:  48.94917, lng:  -57.00000},
  {lat:  49.00761, lng:  -56.50000},
  {lat:  49.06385, lng:  -56.00000},
  {lat:  49.11791, lng:  -55.50000},
  {lat:  49.16980, lng:  -55.00000},
  {lat:  49.21957, lng:  -54.50000},
  {lat:  49.26721, lng:  -54.00000},
  {lat:  49.31275, lng:  -53.50000},
  {lat:  49.35622, lng:  -53.00000},
  {lat:  49.39763, lng:  -52.50000},
  {lat:  49.43700, lng:  -52.00000},
  {lat:  49.47435, lng:  -51.50000},
  {lat:  49.50970, lng:  -51.00000},
  {lat:  49.54307, lng:  -50.50000},
  {lat:  49.57446, lng:  -50.00000},
  {lat:  49.60391, lng:  -49.50000},
  {lat:  49.63142, lng:  -49.00000},
  {lat:  49.65701, lng:  -48.50000},
  {lat:  49.68069, lng:  -48.00000},
  {lat:  49.70248, lng:  -47.50000},
  {lat:  49.72240, lng:  -47.00000},
  {lat:  49.74046, lng:  -46.50000},
  {lat:  49.75666, lng:  -46.00000},
  {lat:  49.77103, lng:  -45.50000},
  {lat:  49.78359, lng:  -45.00000},
  {lat:  49.79433, lng:  -44.50000},
  {lat:  49.80327, lng:  -44.00000},
  {lat:  49.81043, lng:  -43.50000},
  {lat:  49.81582, lng:  -43.00000},
  {lat:  49.81944, lng:  -42.50000},
  {lat:  49.82132, lng:  -42.00000},
  {lat:  49.82145, lng:  -41.50000},
  {lat:  49.81985, lng:  -41.00000},
  {lat:  49.81653, lng:  -40.50000},
  {lat:  49.81150, lng:  -40.00000},
  {lat:  49.80477, lng:  -39.50000},
  {lat:  49.79635, lng:  -39.00000},
  {lat:  49.78625, lng:  -38.50000},
  {lat:  49.77448, lng:  -38.00000},
  {lat:  49.76104, lng:  -37.50000},
  {lat:  49.74595, lng:  -37.00000},
  {lat:  49.72921, lng:  -36.50000},
  {lat:  49.71083, lng:  -36.00000},
  {lat:  49.69082, lng:  -35.50000},
  {lat:  49.66919, lng:  -35.00000},
  {lat:  49.64594, lng:  -34.50000},
  {lat:  49.62108, lng:  -34.00000},
  {lat:  49.59462, lng:  -33.50000},
  {lat:  49.56657, lng:  -33.00000},
  {lat:  49.53693, lng:  -32.50000},
  {lat:  49.50572, lng:  -32.00000},
  {lat:  49.47292, lng:  -31.50000},
  {lat:  49.43856, lng:  -31.00000},
  {lat:  49.40265, lng:  -30.50000},
  {lat:  49.36517, lng:  -30.00000},
  {lat:  49.32615, lng:  -29.50000},
  {lat:  49.28558, lng:  -29.00000},
  {lat:  49.24348, lng:  -28.50000},
  {lat:  49.19985, lng:  -28.00000},
  {lat:  49.15469, lng:  -27.50000},
  {lat:  49.10802, lng:  -27.00000},
  {lat:  49.05983, lng:  -26.50000},
  {lat:  49.01013, lng:  -26.00000},
  {lat:  48.95893, lng:  -25.50000},
  {lat:  48.90623, lng:  -25.00000},
  {lat:  48.85204, lng:  -24.50000},
  {lat:  48.79637, lng:  -24.00000},
  {lat:  48.73920, lng:  -23.50000},
  {lat:  48.68057, lng:  -23.00000},
  {lat:  48.62046, lng:  -22.50000},
  {lat:  48.55889, lng:  -22.00000},
  {lat:  48.49586, lng:  -21.50000},
  {lat:  48.43137, lng:  -21.00000},
  {lat:  48.36543, lng:  -20.50000},
  {lat:  48.29803, lng:  -20.00000},
  {lat:  48.22791, lng:  -19.48920},
  {lat:  47.00614, lng:  -20.07684},
]

// Second BLUE, lng: Solar Ecli}se of  2024 Apr 08 - Southern Limit
const pathCoordsB2 = [
  {lat:  -8.45393, lng: -158.33575},
  {lat:  -8.41023, lng: -158.00000},
  {lat:  -8.34299, lng: -157.50000},
  {lat:  -8.27322, lng: -157.00000},
  {lat:  -8.20089, lng: -156.50000},
  {lat:  -8.12597, lng: -156.00000},
  {lat:  -8.04843, lng: -155.50000},
  {lat:  -7.96822, lng: -155.00000},
  {lat:  -7.88532, lng: -154.50000},
  {lat:  -7.79968, lng: -154.00000},
  {lat:  -7.71127, lng: -153.50000},
  {lat:  -7.62004, lng: -153.00000},
  {lat:  -7.52597, lng: -152.50000},
  {lat:  -7.42901, lng: -152.00000},
  {lat:  -7.32911, lng: -151.50000},
  {lat:  -7.22624, lng: -151.00000},
  {lat:  -7.12035, lng: -150.50000},
  {lat:  -7.01141, lng: -150.00000},
  {lat:  -6.89934, lng: -149.50000},
  {lat:  -6.78413, lng: -149.00000},
  {lat:  -6.66571, lng: -148.50000},
  {lat:  -6.54404, lng: -148.00000},
  {lat:  -6.41907, lng: -147.50000},
  {lat:  -6.29074, lng: -147.00000},
  {lat:  -6.15901, lng: -146.50000},
  {lat:  -6.02381, lng: -146.00000},
  {lat:  -5.88510, lng: -145.50000},
  {lat:  -5.74281, lng: -145.00000},
  {lat:  -5.59689, lng: -144.50000},
  {lat:  -5.44727, lng: -144.00000},
  {lat:  -5.29391, lng: -143.50000},
  {lat:  -5.13672, lng: -143.00000},
  {lat:  -4.97564, lng: -142.50000},
  {lat:  -4.81063, lng: -142.00000},
  {lat:  -4.64159, lng: -141.50000},
  {lat:  -4.46846, lng: -141.00000},
  {lat:  -4.29119, lng: -140.50000},
  {lat:  -4.10967, lng: -140.00000},
  {lat:  -3.92385, lng: -139.50000},
  {lat:  -3.73365, lng: -139.00000},
  {lat:  -3.53898, lng: -138.50000},
  {lat:  -3.33977, lng: -138.00000},
  {lat:  -3.13595, lng: -137.50000},
  {lat:  -2.92741, lng: -137.00000},
  {lat:  -2.71407, lng: -136.50000},
  {lat:  -2.49586, lng: -136.00000},
  {lat:  -2.27266, lng: -135.50000},
  {lat:  -2.04441, lng: -135.00000},
  {lat:  -1.81100, lng: -134.50000},
  {lat:  -1.57233, lng: -134.00000},
  {lat:  -1.32832, lng: -133.50000},
  {lat:  -1.07885, lng: -133.00000},
  {lat:  -0.82382, lng: -132.50000},
  {lat:  -0.56316, lng: -132.00000},
  {lat:  -0.29673, lng: -131.50000},
  {lat:  -0.02444, lng: -131.00000},
  {lat:   0.25381, lng: -130.50000},
  {lat:   0.53813, lng: -130.00000},
  {lat:   0.82863, lng: -129.50000},
  {lat:   1.12542, lng: -129.00000},
  {lat:   1.42861, lng: -128.50000},
  {lat:   1.73830, lng: -128.00000},
  {lat:   2.05459, lng: -127.50000},
  {lat:   2.37761, lng: -127.00000},
  {lat:   2.70744, lng: -126.50000},
  {lat:   3.04420, lng: -126.00000},
  {lat:   3.38796, lng: -125.50000},
  {lat:   3.73887, lng: -125.00000},
  {lat:   4.09696, lng: -124.50000},
  {lat:   4.46235, lng: -124.00000},
  {lat:   4.83512, lng: -123.50000},
  {lat:   5.21533, lng: -123.00000},
  {lat:   5.60307, lng: -122.50000},
  {lat:   5.99836, lng: -122.00000},
  {lat:   6.40126, lng: -121.50000},
  {lat:   6.81184, lng: -121.00000},
  {lat:   7.23005, lng: -120.50000},
  {lat:   7.65594, lng: -120.00000},
  {lat:   8.08949, lng: -119.50000},
  {lat:   8.53068, lng: -119.00000},
  {lat:   8.97942, lng: -118.50000},
  {lat:   9.43565, lng: -118.00000},
  {lat:   9.89930, lng: -117.50000},
  {lat:  10.37022, lng: -117.00000},
  {lat:  10.84825, lng: -116.50000},
  {lat:  11.33327, lng: -116.00000},
  {lat:  11.82500, lng: -115.50000},
  {lat:  12.32322, lng: -115.00000},
  {lat:  12.82766, lng: -114.50000},
  {lat:  13.33803, lng: -114.00000},
  {lat:  13.85398, lng: -113.50000},
  {lat:  14.37513, lng: -113.00000},
  {lat:  14.90107, lng: -112.50000},
  {lat:  15.43141, lng: -112.00000},
  {lat:  15.96561, lng: -111.50000},
  {lat:  16.50322, lng: -111.00000},
  {lat:  17.04375, lng: -110.50000},
  {lat:  17.58663, lng: -110.00000},
  {lat:  18.13131, lng: -109.50000},
  {lat:  18.67718, lng: -109.00000},
  {lat:  19.22375, lng: -108.50000},
  {lat:  19.77034, lng: -108.00000},
  {lat:  20.31643, lng: -107.50000},
  {lat:  20.86140, lng: -107.00000},
  {lat:  21.40469, lng: -106.50000},
  {lat:  21.94574, lng: -106.00000},
  {lat:  22.48400, lng: -105.50000},
  {lat:  23.01894, lng: -105.00000},
  {lat:  23.55009, lng: -104.50000},
  {lat:  24.07695, lng: -104.00000},
  {lat:  24.59907, lng: -103.50000},
  {lat:  25.11604, lng: -103.00000},
  {lat:  25.62752, lng: -102.50000},
  {lat:  26.13311, lng: -102.00000},
  {lat:  26.63253, lng: -101.50000},
  {lat:  27.12545, lng: -101.00000},
  {lat:  27.61169, lng: -100.50000},
  {lat:  28.09100, lng: -100.00000},
  {lat:  28.56318, lng:  -99.50000},
  {lat:  29.02809, lng:  -99.00000},
  {lat:  29.48562, lng:  -98.50000},
  {lat:  29.93565, lng:  -98.00000},
  {lat:  30.37810, lng:  -97.50000},
  {lat:  30.81292, lng:  -97.00000},
  {lat:  31.24009, lng:  -96.50000},
  {lat:  31.65958, lng:  -96.00000},
  {lat:  32.07141, lng:  -95.50000},
  {lat:  32.47559, lng:  -95.00000},
  {lat:  32.87216, lng:  -94.50000},
  {lat:  33.26117, lng:  -94.00000},
  {lat:  33.64267, lng:  -93.50000},
  {lat:  34.01674, lng:  -93.00000},
  {lat:  34.38345, lng:  -92.50000},
  {lat:  34.74288, lng:  -92.00000},
  {lat:  35.09513, lng:  -91.50000},
  {lat:  35.44029, lng:  -91.00000},
  {lat:  35.77846, lng:  -90.50000},
  {lat:  36.10975, lng:  -90.00000},
  {lat:  36.43425, lng:  -89.50000},
  {lat:  36.75210, lng:  -89.00000},
  {lat:  37.06338, lng:  -88.50000},
  {lat:  37.36821, lng:  -88.00000},
  {lat:  37.66671, lng:  -87.50000},
  {lat:  37.95898, lng:  -87.00000},
  {lat:  38.24515, lng:  -86.50000},
  {lat:  38.52531, lng:  -86.00000},
  {lat:  38.79959, lng:  -85.50000},
  {lat:  39.06808, lng:  -85.00000},
  {lat:  39.33090, lng:  -84.50000},
  {lat:  39.58816, lng:  -84.00000},
  {lat:  39.83995, lng:  -83.50000},
  {lat:  40.08639, lng:  -83.00000},
  {lat:  40.32758, lng:  -82.50000},
  {lat:  40.56361, lng:  -82.00000},
  {lat:  40.79458, lng:  -81.50000},
  {lat:  41.02059, lng:  -81.00000},
  {lat:  41.24173, lng:  -80.50000},
  {lat:  41.45810, lng:  -80.00000},
  {lat:  41.66979, lng:  -79.50000},
  {lat:  41.87687, lng:  -79.00000},
  {lat:  42.07945, lng:  -78.50000},
  {lat:  42.27760, lng:  -78.00000},
  {lat:  42.47140, lng:  -77.50000},
  {lat:  42.66093, lng:  -77.00000},
  {lat:  42.84628, lng:  -76.50000},
  {lat:  43.02752, lng:  -76.00000},
  {lat:  43.20470, lng:  -75.50000},
  {lat:  43.37793, lng:  -75.00000},
  {lat:  43.54726, lng:  -74.50000},
  {lat:  43.71276, lng:  -74.00000},
  {lat:  43.87450, lng:  -73.50000},
  {lat:  44.03254, lng:  -73.00000},
  {lat:  44.18695, lng:  -72.50000},
  {lat:  44.33777, lng:  -72.00000},
  {lat:  44.48508, lng:  -71.50000},
  {lat:  44.62895, lng:  -71.00000},
  {lat:  44.76941, lng:  -70.50000},
  {lat:  44.90652, lng:  -70.00000},
  {lat:  45.04034, lng:  -69.50000},
  {lat:  45.17092, lng:  -69.00000},
  {lat:  45.29831, lng:  -68.50000},
  {lat:  45.42256, lng:  -68.00000},
  {lat:  45.54372, lng:  -67.50000},
  {lat:  45.66183, lng:  -67.00000},
  {lat:  45.77695, lng:  -66.50000},
  {lat:  45.88910, lng:  -66.00000},
  {lat:  45.99834, lng:  -65.50000},
  {lat:  46.10471, lng:  -65.00000},
  {lat:  46.20825, lng:  -64.50000},
  {lat:  46.30900, lng:  -64.00000},
  {lat:  46.40699, lng:  -63.50000},
  {lat:  46.50226, lng:  -63.00000},
  {lat:  46.59486, lng:  -62.50000},
  {lat:  46.68481, lng:  -62.00000},
  {lat:  46.77215, lng:  -61.50000},
  {lat:  46.85691, lng:  -61.00000},
  {lat:  46.93913, lng:  -60.50000},
  {lat:  47.01883, lng:  -60.00000},
  {lat:  47.09606, lng:  -59.50000},
  {lat:  47.17083, lng:  -59.00000},
  {lat:  47.24318, lng:  -58.50000},
  {lat:  47.31313, lng:  -58.00000},
  {lat:  47.38072, lng:  -57.50000},
  {lat:  47.44597, lng:  -57.00000},
  {lat:  47.50890, lng:  -56.50000},
  {lat:  47.56955, lng:  -56.00000},
  {lat:  47.62793, lng:  -55.50000},
  {lat:  47.68407, lng:  -55.00000},
  {lat:  47.73800, lng:  -54.50000},
  {lat:  47.78973, lng:  -54.00000},
  {lat:  47.83929, lng:  -53.50000},
  {lat:  47.88671, lng:  -53.00000},
  {lat:  47.93200, lng:  -52.50000},
  {lat:  47.97517, lng:  -52.00000},
  {lat:  48.01627, lng:  -51.50000},
  {lat:  48.05529, lng:  -51.00000},
  {lat:  48.09227, lng:  -50.50000},
  {lat:  48.12721, lng:  -50.00000},
  {lat:  48.16014, lng:  -49.50000},
  {lat:  48.19107, lng:  -49.00000},
  {lat:  48.22004, lng:  -48.50000},
  {lat:  48.24703, lng:  -48.00000},
  {lat:  48.27209, lng:  -47.50000},
  {lat:  48.29521, lng:  -47.00000},
  {lat:  48.31643, lng:  -46.50000},
  {lat:  48.33574, lng:  -46.00000},
  {lat:  48.35316, lng:  -45.50000},
  {lat:  48.36872, lng:  -45.00000},
  {lat:  48.38242, lng:  -44.50000},
  {lat:  48.39428, lng:  -44.00000},
  {lat:  48.40431, lng:  -43.50000},
  {lat:  48.41252, lng:  -43.00000},
  {lat:  48.41893, lng:  -42.50000},
  {lat:  48.42354, lng:  -42.00000},
  {lat:  48.42638, lng:  -41.50000},
  {lat:  48.42745, lng:  -41.00000},
  {lat:  48.42676, lng:  -40.50000},
  {lat:  48.42432, lng:  -40.00000},
  {lat:  48.42015, lng:  -39.50000},
  {lat:  48.41426, lng:  -39.00000},
  {lat:  48.40665, lng:  -38.50000},
  {lat:  48.39733, lng:  -38.00000},
  {lat:  48.38633, lng:  -37.50000},
  {lat:  48.37363, lng:  -37.00000},
  {lat:  48.35926, lng:  -36.50000},
  {lat:  48.34322, lng:  -36.00000},
  {lat:  48.32553, lng:  -35.50000},
  {lat:  48.30619, lng:  -35.00000},
  {lat:  48.28520, lng:  -34.50000},
  {lat:  48.26258, lng:  -34.00000},
  {lat:  48.23834, lng:  -33.50000},
  {lat:  48.21249, lng:  -33.00000},
  {lat:  48.18502, lng:  -32.50000},
  {lat:  48.15596, lng:  -32.00000},
  {lat:  48.12531, lng:  -31.50000},
  {lat:  48.09306, lng:  -31.00000},
  {lat:  48.05924, lng:  -30.50000},
  {lat:  48.02385, lng:  -30.00000},
  {lat:  47.98690, lng:  -29.50000},
  {lat:  47.94839, lng:  -29.00000},
  {lat:  47.90832, lng:  -28.50000},
  {lat:  47.86671, lng:  -28.00000},
  {lat:  47.82357, lng:  -27.50000},
  {lat:  47.77890, lng:  -27.00000},
  {lat:  47.73270, lng:  -26.50000},
  {lat:  47.68499, lng:  -26.00000},
  {lat:  47.63575, lng:  -25.50000},
  {lat:  47.58503, lng:  -25.00000},
  {lat:  47.53279, lng:  -24.50000},
  {lat:  47.47906, lng:  -24.00000},
  {lat:  47.42385, lng:  -23.50000},
  {lat:  47.36715, lng:  -23.00000},
  {lat:  47.30898, lng:  -22.50000},
  {lat:  47.24934, lng:  -22.00000},
  {lat:  47.18823, lng:  -21.50000},
  {lat:  47.12566, lng:  -21.00000},
  {lat:  47.06164, lng:  -20.50000},
  {lat:  47.00614, lng:  -20.07684},
]

const pathCoordsR1 = [
  {lat:  -7.82487, lng: -158.53125},
  {lat:  -7.82066, lng: -158.50000},
  {lat:  -7.75237, lng: -158.00000},
  {lat:  -7.68154, lng: -157.50000},
  {lat:  -7.60814, lng: -157.00000},
  {lat:  -7.53212, lng: -156.50000},
  {lat:  -7.45346, lng: -156.00000},
  {lat:  -7.37212, lng: -155.50000},
  {lat:  -7.28806, lng: -155.00000},
  {lat:  -7.20125, lng: -154.50000},
  {lat:  -7.11164, lng: -154.00000},
  {lat:  -7.01921, lng: -153.50000},
  {lat:  -6.92390, lng: -153.00000},
  {lat:  -6.82568, lng: -152.50000},
  {lat:  -6.72450, lng: -152.00000},
  {lat:  -6.62033, lng: -151.50000},
  {lat:  -6.51312, lng: -151.00000},
  {lat:  -6.40282, lng: -150.50000},
  {lat:  -6.28938, lng: -150.00000},
  {lat:  -6.17277, lng: -149.50000},
  {lat:  -6.05292, lng: -149.00000},
  {lat:  -5.92980, lng: -148.50000},
  {lat:  -5.80335, lng: -148.00000},
  {lat:  -5.67351, lng: -147.50000},
  {lat:  -5.54024, lng: -147.00000},
  {lat:  -5.40348, lng: -146.50000},
  {lat:  -5.26317, lng: -146.00000},
  {lat:  -5.11924, lng: -145.50000},
  {lat:  -4.97166, lng: -145.00000},
  {lat:  -4.82035, lng: -144.50000},
  {lat:  -4.66525, lng: -144.00000},
  {lat:  -4.50629, lng: -143.50000},
  {lat:  -4.34342, lng: -143.00000},
  {lat:  -4.17656, lng: -142.50000},
  {lat:  -4.00565, lng: -142.00000},
  {lat:  -3.83061, lng: -141.50000},
  {lat:  -3.65137, lng: -141.00000},
  {lat:  -3.46786, lng: -140.50000},
  {lat:  -3.28000, lng: -140.00000},
  {lat:  -3.08772, lng: -139.50000},
  {lat:  -2.89092, lng: -139.00000},
  {lat:  -2.68954, lng: -138.50000},
  {lat:  -2.48349, lng: -138.00000},
  {lat:  -2.27268, lng: -137.50000},
  {lat:  -2.05703, lng: -137.00000},
  {lat:  -1.83644, lng: -136.50000},
  {lat:  -1.61083, lng: -136.00000},
  {lat:  -1.38010, lng: -135.50000},
  {lat:  -1.14415, lng: -135.00000},
  {lat:  -0.90289, lng: -134.50000},
  {lat:  -0.65623, lng: -134.00000},
  {lat:  -0.40406, lng: -133.50000},
  {lat:  -0.14629, lng: -133.00000},
  {lat:   0.11721, lng: -132.50000},
  {lat:   0.38652, lng: -132.00000},
  {lat:   0.66175, lng: -131.50000},
  {lat:   0.94301, lng: -131.00000},
  {lat:   1.23041, lng: -130.50000},
  {lat:   1.52406, lng: -130.00000},
  {lat:   1.82406, lng: -129.50000},
  {lat:   2.13051, lng: -129.00000},
  {lat:   2.44355, lng: -128.50000},
  {lat:   2.76325, lng: -128.00000},
  {lat:   3.08974, lng: -127.50000},
  {lat:   3.42312, lng: -127.00000},
  {lat:   3.76347, lng: -126.50000},
  {lat:   4.11093, lng: -126.00000},
  {lat:   4.46555, lng: -125.50000},
  {lat:   4.82744, lng: -125.00000},
  {lat:   5.19669, lng: -124.50000},
  {lat:   5.57338, lng: -124.00000},
  {lat:   5.95756, lng: -123.50000},
  {lat:   6.34931, lng: -123.00000},
  {lat:   6.74866, lng: -122.50000},
  {lat:   7.15566, lng: -122.00000},
  {lat:   7.57034, lng: -121.50000},
  {lat:   7.99274, lng: -121.00000},
  {lat:   8.42279, lng: -120.50000},
  {lat:   8.86053, lng: -120.00000},
  {lat:   9.30588, lng: -119.50000},
  {lat:   9.75881, lng: -119.00000},
  {lat:  10.21918, lng: -118.50000},
  {lat:  10.68694, lng: -118.00000},
  {lat:  11.16193, lng: -117.50000},
  {lat:  11.64398, lng: -117.00000},
  {lat:  12.13289, lng: -116.50000},
  {lat:  12.62843, lng: -116.00000},
  {lat:  13.13036, lng: -115.50000},
  {lat:  13.63838, lng: -115.00000},
  {lat:  14.15218, lng: -114.50000},
  {lat:  14.67138, lng: -114.00000},
  {lat:  15.19563, lng: -113.50000},
  {lat:  15.72445, lng: -113.00000},
  {lat:  16.25743, lng: -112.50000},
  {lat:  16.79409, lng: -112.00000},
  {lat:  17.33389, lng: -111.50000},
  {lat:  17.87636, lng: -111.00000},
  {lat:  18.42089, lng: -110.50000},
  {lat:  18.96693, lng: -110.00000},
  {lat:  19.51394, lng: -109.50000},
  {lat:  20.06130, lng: -109.00000},
  {lat:  20.60844, lng: -108.50000},
  {lat:  21.15475, lng: -108.00000},
  {lat:  21.69967, lng: -107.50000},
  {lat:  22.24262, lng: -107.00000},
  {lat:  22.78304, lng: -106.50000},
  {lat:  23.32044, lng: -106.00000},
  {lat:  23.85424, lng: -105.50000},
  {lat:  24.38402, lng: -105.00000},
  {lat:  24.90928, lng: -104.50000},
  {lat:  25.28651, lng: -104.13800},
  {lat:  25.42961, lng: -104.00000},
  {lat:  25.92663, lng: -103.51752},
  {lat:  25.94457, lng: -103.50000},
  {lat:  26.45388, lng: -103.00000},
  {lat:  26.95712, lng: -102.50000},
  {lat:  27.45405, lng: -102.00000},
  {lat:  27.94440, lng: -101.50000},
  {lat:  28.42789, lng: -101.00000},
  {lat:  28.90439, lng: -100.50000},
  {lat:  29.37369, lng: -100.00000},
  {lat:  29.83565, lng:  -99.50000},
  {lat:  30.29016, lng:  -99.00000},
  {lat:  30.73715, lng:  -98.50000},
  {lat:  31.17653, lng:  -98.00000},
  {lat:  31.60828, lng:  -97.50000},
  {lat:  32.03236, lng:  -97.00000},
  {lat:  32.44877, lng:  -96.50000},
  {lat:  32.85753, lng:  -96.00000},
  {lat:  33.25867, lng:  -95.50000},
  {lat:  33.65222, lng:  -95.00000},
  {lat:  34.03824, lng:  -94.50000},
  {lat:  34.41680, lng:  -94.00000},
  {lat:  34.78796, lng:  -93.50000},
  {lat:  35.15181, lng:  -93.00000},
  {lat:  35.50844, lng:  -92.50000},
  {lat:  35.85793, lng:  -92.00000},
  {lat:  36.20039, lng:  -91.50000},
  {lat:  36.53592, lng:  -91.00000},
  {lat:  36.86462, lng:  -90.50000},
  {lat:  37.18660, lng:  -90.00000},
  {lat:  37.50198, lng:  -89.50000},
  {lat:  37.81086, lng:  -89.00000},
  {lat:  38.11335, lng:  -88.50000},
  {lat:  38.40956, lng:  -88.00000},
  {lat:  38.69961, lng:  -87.50000},
  {lat:  38.98361, lng:  -87.00000},
  {lat:  39.26167, lng:  -86.50000},
  {lat:  39.53391, lng:  -86.00000},
  {lat:  39.80041, lng:  -85.50000},
  {lat:  40.06131, lng:  -85.00000},
  {lat:  40.31670, lng:  -84.50000},
  {lat:  40.56667, lng:  -84.00000},
  {lat:  40.81136, lng:  -83.50000},
  {lat:  41.05084, lng:  -83.00000},
  {lat:  41.28522, lng:  -82.50000},
  {lat:  41.51460, lng:  -82.00000},
  {lat:  41.73906, lng:  -81.50000},
  {lat:  41.95872, lng:  -81.00000},
  {lat:  42.17364, lng:  -80.50000},
  {lat:  42.38393, lng:  -80.00000},
  {lat:  42.58967, lng:  -79.50000},
  {lat:  42.79094, lng:  -79.00000},
  {lat:  42.98783, lng:  -78.50000},
  {lat:  43.18042, lng:  -78.00000},
  {lat:  43.36879, lng:  -77.50000},
  {lat:  43.55301, lng:  -77.00000},
  {lat:  43.73316, lng:  -76.50000},
  {lat:  43.90932, lng:  -76.00000},
  {lat:  44.08154, lng:  -75.50000},
  {lat:  44.24990, lng:  -75.00000},
  {lat:  44.41448, lng:  -74.50000},
  {lat:  44.57533, lng:  -74.00000},
  {lat:  44.73252, lng:  -73.50000},
  {lat:  44.88610, lng:  -73.00000},
  {lat:  45.03615, lng:  -72.50000},
  {lat:  45.18272, lng:  -72.00000},
  {lat:  45.32586, lng:  -71.50000},
  {lat:  45.46564, lng:  -71.00000},
  {lat:  45.60210, lng:  -70.50000},
  {lat:  45.73531, lng:  -70.00000},
  {lat:  45.86530, lng:  -69.50000},
  {lat:  45.99213, lng:  -69.00000},
  {lat:  46.11585, lng:  -68.50000},
  {lat:  46.23652, lng:  -68.00000},
  {lat:  46.35415, lng:  -67.50000},
  {lat:  46.46882, lng:  -67.00000},
  {lat:  46.58056, lng:  -66.50000},
  {lat:  46.68941, lng:  -66.00000},
  {lat:  46.79541, lng:  -65.50000},
  {lat:  46.89861, lng:  -65.00000},
  {lat:  46.99904, lng:  -64.50000},
  {lat:  47.09673, lng:  -64.00000},
  {lat:  47.19174, lng:  -63.50000},
  {lat:  47.28409, lng:  -63.00000},
  {lat:  47.37382, lng:  -62.50000},
  {lat:  47.46096, lng:  -62.00000},
  {lat:  47.54554, lng:  -61.50000},
  {lat:  47.62760, lng:  -61.00000},
  {lat:  47.70717, lng:  -60.50000},
  {lat:  47.78428, lng:  -60.00000},
  {lat:  47.85895, lng:  -59.50000},
  {lat:  47.93122, lng:  -59.00000},
  {lat:  48.00112, lng:  -58.50000},
  {lat:  48.06866, lng:  -58.00000},
  {lat:  48.13389, lng:  -57.50000},
  {lat:  48.19682, lng:  -57.00000},
  {lat:  48.25748, lng:  -56.50000},
  {lat:  48.31590, lng:  -56.00000},
  {lat:  48.37209, lng:  -55.50000},
  {lat:  48.42608, lng:  -55.00000},
  {lat:  48.47790, lng:  -54.50000},
  {lat:  48.52756, lng:  -54.00000},
  {lat:  48.57508, lng:  -53.50000},
  {lat:  48.62050, lng:  -53.00000},
  {lat:  48.66382, lng:  -52.50000},
  {lat:  48.70507, lng:  -52.00000},
  {lat:  48.74427, lng:  -51.50000},
  {lat:  48.78143, lng:  -51.00000},
  {lat:  48.81657, lng:  -50.50000},
  {lat:  48.84972, lng:  -50.00000},
  {lat:  48.88089, lng:  -49.50000},
  {lat:  48.91008, lng:  -49.00000},
  {lat:  48.93733, lng:  -48.50000},
  {lat:  48.96265, lng:  -48.00000},
  {lat:  48.98605, lng:  -47.50000},
  {lat:  49.00755, lng:  -47.00000},
  {lat:  49.02715, lng:  -46.50000},
  {lat:  49.04489, lng:  -46.00000},
  {lat:  49.06076, lng:  -45.50000},
  {lat:  49.07479, lng:  -45.00000},
  {lat:  49.08699, lng:  -44.50000},
  {lat:  49.09737, lng:  -44.00000},
  {lat:  49.10595, lng:  -43.50000},
  {lat:  49.11272, lng:  -43.00000},
  {lat:  49.11771, lng:  -42.50000},
  {lat:  49.12094, lng:  -42.00000},
  {lat:  49.12239, lng:  -41.50000},
  {lat:  49.12211, lng:  -41.00000},
  {lat:  49.12008, lng:  -40.50000},
  {lat:  49.11633, lng:  -40.00000},
  {lat:  49.11086, lng:  -39.50000},
  {lat:  49.10368, lng:  -39.00000},
  {lat:  49.09480, lng:  -38.50000},
  {lat:  49.08424, lng:  -38.00000},
  {lat:  49.07199, lng:  -37.50000},
  {lat:  49.05807, lng:  -37.00000},
  {lat:  49.04250, lng:  -36.50000},
  {lat:  49.02527, lng:  -36.00000},
  {lat:  49.00640, lng:  -35.50000},
  {lat:  48.98589, lng:  -35.00000},
  {lat:  48.96375, lng:  -34.50000},
  {lat:  48.93999, lng:  -34.00000},
  {lat:  48.91462, lng:  -33.50000},
  {lat:  48.88765, lng:  -33.00000},
  {lat:  48.85907, lng:  -32.50000},
  {lat:  48.82891, lng:  -32.00000},
  {lat:  48.79716, lng:  -31.50000},
  {lat:  48.76384, lng:  -31.00000},
  {lat:  48.72895, lng:  -30.50000},
  {lat:  48.69250, lng:  -30.00000},
  {lat:  48.65449, lng:  -29.50000},
  {lat:  48.61493, lng:  -29.00000},
  {lat:  48.57383, lng:  -28.50000},
  {lat:  48.53119, lng:  -28.00000},
  {lat:  48.48701, lng:  -27.50000},
  {lat:  48.44132, lng:  -27.00000},
  {lat:  48.39410, lng:  -26.50000},
  {lat:  48.34538, lng:  -26.00000},
  {lat:  48.29514, lng:  -25.50000},
  {lat:  48.24341, lng:  -25.00000},
  {lat:  48.19018, lng:  -24.50000},
  {lat:  48.13546, lng:  -24.00000},
  {lat:  48.07925, lng:  -23.50000},
  {lat:  48.02156, lng:  -23.00000},
  {lat:  47.96240, lng:  -22.50000},
  {lat:  47.90177, lng:  -22.00000},
  {lat:  47.83968, lng:  -21.50000},
  {lat:  47.77613, lng:  -21.00000},
  {lat:  47.71114, lng:  -20.50000},
  {lat:  47.64468, lng:  -20.00000},
  {lat:  47.61602, lng:  -19.78741},
]

export default {
  name: '2024-04-08',
  elements,
  pathCoordsB1,
  pathCoordsB2,
  pathCoordsR1,
}