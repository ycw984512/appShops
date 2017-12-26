/*
* @Author: Marte
* @Date:   2017-12-20 12:53:32
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-26 10:06:18
*/

      $(document).ready(function() {

            var widget = $('.tabs-vertical');

            var tabs = widget.find('ul a'),
                  content = widget.find('.tabs-content-placeholder > div');

            tabs.on('click', function (e) {

                  e.preventDefault();

                  // Get the data-index attribute, and show the matching content div

                  var index = $(this).data('index');

                  tabs.removeClass('tab-active');
                  content.removeClass('tab-content-active');

                  $(this).addClass('tab-active');
                  content.eq(index).addClass('tab-content-active');

            });

      });

