<div id="contact" class="py-5">
  <div class="container py-4">
    <h2 class="text-primary pb-4">Pour nous contacter</h2>
    <div class="row">
      <div class="col-12 col-lg-6 pb-4">
        <h5 class="pt-3">France (siège)</h5>
        <p class="lead">
          47 rue judaïque
          <br>33000 Bordeaux
        </p>
        <h5 class="pt-3">Togo</h5>
        <p class="lead">
          Quartier Agbalépédo (en face de la HAAC)
          <br>06 BP : 61 192 Lomé
        </p>
        <p class="lead pt-3 font-weight-normal">
          <i class="fas fa-fw mr-3 mt-1 fa-lg text-dark fa-envelope"></i>
          <a href="mailto:{{site.email}}">{{site.email}}</a>
        </p>
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
