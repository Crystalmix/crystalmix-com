$(document).ready(function(){

    var industry = $('.blogs-filter .dropdown'),
        type_of_work = $('#type-of-work'),
        year = $('#year');

    industry.on('shown.bs.dropdown', function() {
        $('.blog-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    industry.on('hide.bs.dropdown', function() {
        $('.blog-slider').slick('unslick');
    });
});

ngApp = angular.module('ngApp', []);

ngApp.filter('blogFilter', function() {
   return function (items, currentFilter) {
       if (!items || !currentFilter) return items;
       var result = [];
       angular.forEach(items, function(item) {
           if (item[currentFilter.tag_name].indexOf(currentFilter.label) >= 0) {
               result.push(item);
           }
       });
       return result;
   };
});

ngApp.controller('blogsCtrl', function($scope) {

    var jsonParser = function(json) {
        var result = angular.copy(json);
        angular.forEach(result, function(item) {
            item.tags_industry = item.tags_industry.toLowerCase().replace(/\s{2,}/g, ' ').split(', ');
            item.type_of_work = item.type_of_work.toLowerCase().replace(/\s{2,}/g, ' ').split(', ');
            item.platforms = item.platforms.toLowerCase().replace(/\s{2,}/g, ' ').split(', ');
        });
        return result;
    };

    $scope.filters = [
        {
            label: 'TAGS',
            tag_name: 'tags_industry',
            tags: ['ALL', 'RETAIL', 'IT SECURITY', 'TRANSPORTATION', 'HELPDESK', 'TELECOMMUNICATION', 'E-COMMERCE']
        },
        {
            label: 'AUTHOR',
            tag_name: 'type_of_work',
            tags: ['ALL', 'STRATEGY', 'UX DESIGN', 'UI DESIGN', 'DEVELOPMENT']
        },
        {
            label: 'YEAR',
            tag_name: 'year',
            tags: ['ALL', '2015', '2014', '2013', 'EARLIER']
        }
    ];

    $scope.currentFilter = null;

    $scope.works = [
        {
            title: "Serverauditor",
            url: "",
            year: "2013",
            image_url: "img/our_work/works/serverauditor.png",
            type_of_work: "Strategy,     Development",
            tags_industry: "Helpdesk",
            platforms: "android, ios, desktop"
        },
        {
            title: "Weaved",
            url: "",
            year: "2015",
            image_url: "img/our_work/works/iPhone.png",
            type_of_work: "UI design",
            tags_industry: "Retail",
            platforms: "android"
        },
        {
            title: "Serverauditor 2",
            url: "",
            year: "2013",
            image_url: "img/our_work/works/serverauditor.png",
            type_of_work: "Strategy, Development, UI design, UX design",
            tags_industry: "Helpdesk",
            platforms: "android, ios, desktop"
        },
        {
            title: "Weaved",
            url: "",
            year: "2015",
            image_url: "img/our_work/works/iPhone.png",
            type_of_work: "UI design",
            tags_industry: "Retail",
            platforms: "android"
        }
    ];

    $scope.counts = 1;

    $scope.pagination = function () {
        $scope.counts += 1;
    };

    $scope.newworks = jsonParser($scope.works);

    $scope.setFilter = function(tag_name ,tag) {
        if (tag.toLowerCase() == 'all') {
            $scope.currentFilter = null
        } else {
            $scope.currentFilter = {
                tag_name: tag_name,
                label: tag.toLowerCase()
            }
        }
        $scope.counts = 1;
    }
});