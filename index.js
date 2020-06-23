 var image;
      var grayimage;
      function doUpload() {
        var piccanvas = document.getElementById("can2");
        var imacanvas = document.getElementById("can1");

        var upload = document.getElementById("input");
        image = new SimpleImage(upload);
        grayimage = new SimpleImage(upload);

        image.drawTo(imacanvas);
        grayimage.drawTo(piccanvas);
      }

      function makeGray() {
        for (var pix of grayimage.values()) {
          var avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;
          pix.setRed(avg);
          pix.setGreen(avg);
          pix.setBlue(avg);
        }
        var piccanvas = document.getElementById("can2");
        grayimage.drawTo(piccanvas);
      }
