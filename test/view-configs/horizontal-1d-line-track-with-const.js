const viewConf = {
  editable: true,
  zoomFixed: false,
  views: [
    {
      uid: 'aa',
      initialXDomain: [1500000, 3000000],
      tracks: {
        top: [
          {
            uid: 'lines',
            tilesetUid: 'PjIJKXGbSNCalUZO21e_HQ',
            height: 200,
            server: 'http://higlass.io/api/v1',
            type: 'horizontal-line',
            options: {
              constIndicators: [
                {
                  color: '#000000',
                  opacity: 0.33,
                  label: 'Max',
                  labelPosition: 'leftBottom',
                  labelColor: '#000000',
                  labelOpacity: 0.25,
                  value: 60000
                },
                {
                  color: '#000000',
                  opacity: 0.33,
                  label: 'Mean',
                  labelPosition: 'leftBottom',
                  labelColor: '#000000',
                  labelOpacity: 0.25,
                  value: 30000
                },
                {
                  color: '#000000',
                  opacity: 0.33,
                  label: 'Min',
                  labelPosition: 'leftBottom',
                  labelColor: '#000000',
                  labelOpacity: 0.25,
                  value: 10000
                },
              ],
            },
          },
        ]
      },
      layout: {
        w: 12,
        h: 12,
        x: 0,
        y: 0,
        moved: false,
        static: false
      }
    }
  ]
};

export default viewConf;
