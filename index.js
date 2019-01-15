fetch('https://api.foursquare.com/v2/venues/explore?client_id=FKCFZTAEROJJDMGZSLU15CJ4ACT0PO2CNRPIROXIDRS10Q3X&client_secret=2MJEL0S4I31QEIRXBIHFHX5ILUCBFUSIADVZ0C4LJ0YEG3LK&v=20180323&limit=1&near=NYC&query=coffee')
    .then(function(response) {
      // return response.json()
        console.log(response.json())
    })
    .catch(function(error) {
        console.log(error)
    });
