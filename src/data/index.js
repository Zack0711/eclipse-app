
      import D_1901 from './1901';
    
      import D_1921 from './1921';
    
      import D_1941 from './1941';
    
      import D_1961 from './1961';
    
      import D_1981 from './1981';
    
      import D_2001 from './2001';
    
      import D_2021 from './2021';
    
      import D_2041 from './2041';
    
      import D_2061 from './2061';
    
      import D_2081 from './2081';

      const countTypes = data => ({
        'Annular': data.filter(d => d.type === 'Annular').length,
        'Total': data.filter(d => d.type === 'Total').length,
        'Hybrid': data.filter(d => d.type === 'Hybrid').length,        
      })

      /*
          const statistics = {
            'Annular': 0,
            'Total': 0,
            'Hybrid': 0,            
          }
      */
    
      export default [
        { year: 1901, data: D_1901, statistics: countTypes(D_1901) },
        { year: 1921, data: D_1921, statistics: countTypes(D_1921) },
        { year: 1941, data: D_1941, statistics: countTypes(D_1941) },
        { year: 1961, data: D_1961, statistics: countTypes(D_1961) },
        { year: 1981, data: D_1981, statistics: countTypes(D_1981) },
        { year: 2001, data: D_2001, statistics: countTypes(D_2001) },
        { year: 2021, data: D_2021, statistics: countTypes(D_2021) },
        { year: 2041, data: D_2041, statistics: countTypes(D_2041) },
        { year: 2061, data: D_2061, statistics: countTypes(D_2061) },
        { year: 2081, data: D_2081, statistics: countTypes(D_2081) },
        
      ];