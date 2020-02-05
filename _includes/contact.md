<div id="contact" class="py-5">
  <div class="container py-4">
    <h2 class="text-primary pb-4">Pour nous contacter</h2>
    <div class="row">
      <div class="col-12 col-lg-6 pb-4">
        <h5 class="pt-3">France (siège)</h5>
        <p class="lead">
          47 rue Judaïque
          <br>33000 Bordeaux
        </p>
        <h5 class="pt-3">Togo</h5>
        <p class="lead">
          Quartier Agbalépédo (en face de la HAAC)
          <br>06 BP : 61 192 Lomé
        </p>
        <div class="py-3">
          <a
            class="typeform-share button"
            href="https://contact243679.typeform.com/to/awrEEb"
            data-mode="popup"
            style="display:inline-block;text-decoration:none;background-color:#00BC92;color:white;cursor:pointer;font-family:'Open Sans','Helvetica',sans-serif;font-size:16px;line-height:40px;text-align:center;margin:0;height:40px;padding:0px 26px;border-radius:2px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;-moz-osx-font-smoothing:grayscale;"
            data-submit-close-delay="0"
            target="_blank">
            Nous contacter
          </a>
          <script>
            (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
          </script>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div id='map' style='width: 100%; height: 300px;'></div>
      </div>
    </div>
  </div>
</div>

<!-- Mapbox -->

<script src='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'></script>
<script>
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmVub29lbmVyZ2llcyIsImEiOiJjanVvODFzMGMycmhoNDFvYXRpZGdneDd6In0.DVAcLunVw8zcRUC2IcuVig';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10'
  });
  const bounds = new mapboxgl.LngLatBounds();
  var locations = [
    {
      name: 'headquarters',
      lat: 44.841552,
      lng: -0.583664
    },
    {
      name: 'togo',
      lat: 6.1924472,
      lng: 1.2036118
    }
  ];
  locations.forEach((location) => {
    new mapboxgl.Marker()
      .setLngLat([location.lng,location.lat])
      .addTo(map);
    bounds.extend([location.lng, location.lat ]);
  });
  map.fitBounds(bounds, { padding: 70, maxZoom: 2, duration: 0 });
  map.addControl(new mapboxgl.NavigationControl());
</script>
