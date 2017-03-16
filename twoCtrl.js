// scope sprawia, ze do danej mozna sie dostac z HTML, nic ponadto

app.controller('oneCtrl', function($scope, $location, $http) {
  $scope.content = "";
});

// http://mysafeinfo.com/api/data?list=englishmonarchs&format=json
// uzywam tutaj tej dodatkowej biblioteki XML-JSON
app.controller('BBC_SE', function($scope, $http) {
  $http.get("http://feeds.bbci.co.uk/news/science_and_environment/rss.xml", {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var BBC_SE_res = x2js.xml_str2json(cnv);
      $scope.BBC_SE_results = BBC_SE_res;
      console.log("dupa");
      return BBC_SE_res;
    }

  });
});

app.cotroller('TheVergeCtrl', function($scope, $http) {
  $http.get("http://www.theverge.com/rss/index.xml", {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var TheVerge_res = x2js.xml_str2json(cnv);
      $scope.TheVerge_results = TheVerge_res;
      console.log("dupa");
      return TheVerge_res;
    }
  })
});
