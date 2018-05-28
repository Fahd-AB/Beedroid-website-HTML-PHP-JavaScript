 var taille_photos=0;
 var taille_video=0;
 var taille_music=0;
 
 var nb_photos=0;
 var nb_video=0;
 var nb_music=0;
 
 var table_client=new Array();
function showclient(json){
 var media=new Array();
  table_client=json;
 
 var taille=table_client.length;
 var t=0;
 var i=0;
 var j=0;
 //alert("nb clients ="+taille);
 while(i<taille)
 {           j=0;
			 
			 media=table_client[i].Medias;
			 try{ t=media.length;}catch(ed){t=0;}
				while(j<t)
				{
						if((media[j].Type=="jpg")||(media[j].Type=="png")||(media[j].Type=="jpeg"))
								{
								nb_photos++;
								taille_photos+= Math.floor((media[j].Taille/1024)/1024);
								
								}
						
						if((media[j].Type=="3gp")||(media[j].Type=="mp4")||(media[j].Type=="3GP")||(media[j].Type=="mpeg")||(media[j].Type=="avi"))
						{
						nb_video++;
						taille_video+=Math.floor((media[j].Taille/1024)/1024);
						
						}
						
						if((media[j].Type=="mp3")||(media[j].Type=="amr")||(media[j].Type=="midi")||(media[j].Type=="aac")||(media[j].Type=="wma"))
						{
						nb_music++;
						taille_music+=Math.floor((media[j].Taille/1024)/1024);
						}
				
				j++;
				}
 
 
 
 i++;
 }
 document.getElementById("v1").innerHTML=nb_music+" Fichiers";  document.getElementById("p1").innerHTML=nb_photos+" Fichiers"; document.getElementById("v2").innerHTML=nb_video+" Fichiers";
 
 /*alert("nb_photos:"+nb_photos+"  "+"taille_photos:"+taille_photos);
 
 alert("nb_music:"+nb_music+"  "+" taille_music :"+taille_music);
  alert("nb_video:"+nb_video+"  "+" taille_video :"+taille_video);*/
 }

 var main0='{"table":"clients","operation":"select","condition":"","valeur":""}';
$.getJSON("../../controler/main.php",{client_requete:main0},showclient);
















;( function( d3 ) {
  var data = [
    {
      date  : 'September 15',
      value : 515,
      type  : 'Music'
    },
    {
      date  : 'September 16',
      value : 618,
      type  : 'Music'
    },
    {
      date  : 'September 17',
      value : 498,
      type  : 'Music'
    },
    {
      date  : 'September 18',
      value : 1243,
      type  : 'Music'
    },
    {
      date  : 'September 19',
      value : 1033,
      type  : 'Music'
    },
    {
      date  : 'September 15',
      value : 135,
      type  : 'Photos'
    },
    {
      date  : 'September 16',
      value : 218,
      type  : 'Photos'
    },
    {
      date  : 'September 17',
      value : 798,
      type  : 'Photos'
    },
    {
      date  : 'September 18',
      value : 643,
      type  : 'Photos'
    },
    {
      date  : 'September 19',
      value : 533,
      type  : 'Photos'
    },
    {
      date  : 'September 15',
      value : 846,
      type  : 'Files'
    },
    {
      date  : 'September 16',
      value : 218,
      type  : 'Files'
    },
    {
      date  : 'September 17',
      value : 428,
      type  : 'Files'
    },
    {
      date  : 'September 18',
      value : 843,
      type  : 'Files'
    },
    {
      date  : 'September 19',
      value : 333,
      type  : 'Files'
    }
  ];
  /**
   * Function to kick of all fancy download circles
   */
  function visualizeDownloadCircles ( selector ) {

    var d3items    = d3.selectAll( selector ),
        d3graphics = d3items.select( '.ui__downloadList__graphic' ),
        
        svgElements;

    // remove old svg for the case there was one
    d3graphics.select( 'svg' ).remove();

    d3items.each( function( svg, index ) { 
      var d3item = d3.select( this );
          
      index++;
       if(index==1)
	 {
      drawDownloadCircle( d3item, index ,taille_music);
	  }
	    if(index==2)
	 {
      drawDownloadCircle( d3item, index ,taille_photos);
	  }
	    if(index==3)
	 {
      drawDownloadCircle( d3item, index ,taille_video);
	  }
	  
	  
    } );
	
	
  }
  
  /**
   * Function to draw one particular 
   * download circle
   */
  function drawDownloadCircle( d3item, index,valeur ) {
    
    var d3container = d3item.select( '.ui__downloadList__graphic' ),
        value       = valeur,
        type        = d3item.attr( 'data-type' ),
        width       = d3container.attr( 'width' ),
        height      = d3container.attr( 'height' ),
     
        // circle stuff
        twoPi  = 2 * Math.PI,
        radius = Math.min( width, height ) / 2 - 5,
        arcBackground = d3.svg.arc()
                          .startAngle( 0 )
                          .endAngle( function( d ) { return d.value * twoPi; } )
                          .outerRadius( radius - 10 )
                          .innerRadius( radius - 35 ),
        arcForeground = d3.svg.arc()
                          .startAngle( 0 )
                          .endAngle( function( d ) { return d.value * twoPi; } )
                          .outerRadius( radius )
                          .innerRadius( radius - 27 ),
        
        // value stuff
        currentValue = 0,
        progress     = 0,
        
        // animation stuff,
        duration = 3000;
    
    // string to number
    value = +value;
        
    // append new svg
    var svg = d3container.append( 'svg' )
                          .attr( 'width', width )
                          .attr( 'height', height )
                          .append( 'g' )
                          .attr(
                            'transform',
                            'translate(' + width / 2 + ',' + height / 2 + ')'
                          );
    
    // filter stuff
    /* For the drop shadow filter... */
    var defs = svg.append( 'defs' );

    var filter = defs.append( 'filter' )
                      .attr( 'id', 'dropshadow' )

    filter.append( 'feGaussianBlur' )
          .attr( 'in', 'SourceAlpha' )
          .attr( 'stdDeviation', 2 )
          .attr( 'result', 'blur' );
    filter.append( 'feOffset' )
          .attr( 'in', 'blur' )
          .attr( 'dx', 2 )
          .attr( 'dy', 3 )
          .attr( 'result', 'offsetBlur' );

    var feMerge = filter.append( 'feMerge' );

    feMerge.append( 'feMergeNode' )
            .attr( 'in", "offsetBlur' )
    feMerge.append( 'feMergeNode' )
            .attr( 'in', 'SourceGraphic' );
    // end filter stuff
    
    // gradient stuff    
    var gradientBackgroundRed = defs.append( 'linearGradient' )
                                    .attr( 'id', 'gradientBackgroundRed' )
                                    .attr( 'x1', '0' )
                                    .attr( 'x2', '0' )
                                    .attr( 'y1', '0' )
                                    .attr( 'y2', '1' );
    gradientBackgroundRed.append( 'stop' )
                        .attr( 'class', 'redBackgroundStop1' )
                        .attr( 'offset', '0%' );
    
    gradientBackgroundRed.append( 'stop' )
                        .attr( 'class', 'redBackgroundStop2' )
                        .attr( 'offset', '100%' ); 

    var gradientBackgroundPurple = defs.append( 'linearGradient' )
                                      .attr( 'id', 'gradientBackgroundPurple' )
                                      .attr( 'x1', '0' )
                                      .attr( 'x2', '0' )
                                      .attr( 'y1', '0' )
                                      .attr( 'y2', '1' );
    
    gradientBackgroundPurple.append( 'stop' )
                            .attr( 'class', 'purpleBackgroundStop1' )
                            .attr( 'offset', '0%' );
    
    gradientBackgroundPurple.append( 'stop' )
                            .attr( 'class', 'purpleBackgroundStop2' )
                            .attr( 'offset', '100%' ); 

    var gradientBackgroundCyan = defs.append( 'linearGradient' )
                                    .attr( 'id', 'gradientBackgroundCyan' )
                                    .attr( 'x1', '0' )
                                    .attr( 'x2', '0' )
                                    .attr( 'y1', '0' )
                                    .attr( 'y2', '1' );
    
    gradientBackgroundCyan.append( 'stop' )
                          .attr( 'class', 'cyanBackgroundStop1' )
                          .attr( 'offset', '0%' );
    
    gradientBackgroundCyan.append( 'stop' )
                          .attr( 'class', 'cyanBackgroundStop2' )
                          .attr( 'offset', '100%' );     

    var gradientForegroundRed = defs.append( 'linearGradient' )
                                    .attr( 'id', 'gradientForegroundRed' )
                                    .attr( 'x1', '0' )
                                    .attr( 'x2', '0' )
                                    .attr( 'y1', '0' )
                                    .attr( 'y2', '1' );
    gradientForegroundRed.append( 'stop' )
                        .attr( 'class', 'redForegroundStop1' )
                        .attr( 'offset', '0%' );
    
    gradientForegroundRed.append( 'stop' )
                        .attr( 'class', 'redForegroundStop2' )
                        .attr( 'offset', '100%' ); 

    var gradientForegroundPurple = defs.append( 'linearGradient' )
                                        .attr( 'id', 'gradientForegroundPurple' )
                                        .attr( 'x1', '0' )
                                        .attr( 'x2', '0' )
                                        .attr( 'y1', '0' )
                                        .attr( 'y2', '1' );
    
    gradientForegroundPurple.append( 'stop' )
                .attr( 'class', 'purpleForegroundStop1' )
                .attr( 'offset', '0%' );
    
    gradientForegroundPurple.append( 'stop' )
                .attr( 'class', 'purpleForegroundStop2' )
                .attr( 'offset', '100%' ); 

    var gradientForegroundCyan = defs.append( 'linearGradient' )
                            .attr( 'id', 'gradientForegroundCyan' )
                            .attr( 'x1', '0' )
                            .attr( 'x2', '0' )
                            .attr( 'y1', '0' )
                            .attr( 'y2', '1' );
    
    gradientForegroundCyan.append( 'stop' )
                .attr( 'class', 'cyanForegroundStop1' )
                .attr( 'offset', '0%' );
    
    gradientForegroundCyan.append( 'stop' )
                .attr( 'class', 'cyanForegroundStop2' )
                .attr( 'offset', '100%' );     
    // end gradient stuff
    
    

    var meter = svg.append( 'g' )
                    .attr( 'class', 'progress-meter' );
    
    meter.append( 'title' )
          .text( 'Progress meter showing amount of space used for ' + type );
    
    meter.data(
            [
              { value : .0,  index : .5 }
            ]
          )
          .append( 'path' )
          .attr( 'class', 'ui__downloadList__backgroundCircle' )
          .attr( 'd', arcBackground )
          .attr( 'filter', 'url(#dropshadow)' )
          .transition()
          .duration( duration )
          .attrTween( 'd', tweenArcBackground( { value : 1 } ) );
    

    var foreground = meter.data(
                            [
                              { value : .0, index: .5 }
                            ]
                          )
                          .append( 'path' )
                          .attr( 'stroke', '#fff' )
                          .attr( 'class', 'ui__downloadList__foregroundCircle' )
                          .attr( 'd', arcForeground )
                          .attr( 'filter', 'url(#dropshadow)' )
                          .transition()
                          .attr( 'stroke', '#aaa' )
                          .delay( 1000 * index )   
                          .duration( duration )
                          .attrTween( 'd', tweenArcForeground({ value : value / 1000 } ) );
    
    
    meter.data( [ 0 ] )
          .append( 'text' )
          .text ( 0 )
          .attr( 'font-size', '25px' )
          .attr( 'x', 0 )
          .attr( 'y', 0 )
          .attr( 'fill', '#fff' )
          .attr( 'text-anchor', 'middle' )
          .attr( 'filter', 'url(#dropshadow)' )
          .transition()
          .delay( 1000 * index )
          .duration( duration )
          .tween( 'text', tweenText( value ) );
   
    meter.append( 'text' )
          .attr( 'fill', '#fff' )
          .attr( 'x', 0 )
          .attr( 'y', 20 ) 
          .attr( 'text-anchor', 'middle' )
          .attr( 'filter', 'url(#dropshadow)' )
          .text( 'Go' );

    
    // Helper functions!!!
    function tweenArcForeground( b ) {
      return function( a ) {
        var i = d3.interpolate( a, b );

        return function( t ) {
          return arcForeground( i ( t ) );
        };
      };
    }
    
    function tweenArcBackground( b ) {
      return function( a ) {
        var i = d3.interpolate( a, b );

        return function( t ) {
          return arcBackground( i ( t ) );
        };
      };
    }
    
    function tweenText( b ) {
      return function( a ) {
        var i = d3.interpolateRound( a, b );

        return function(t) {
          this.textContent = i(t);
        };
      }
    }
	

 
	
	
	
	
  }
  
  /**
   * Function to kick off drawing
   * the timeline graphic
   */
  function visualizeDownloadTimeline( selector, data ) {
    var d3container = d3.select( selector ),
        width       = d3container.attr( 'width' ),
        height      = d3container.attr( 'height' ),
        margin      = { top : 5, right : 0, bottom : 30, left : 0 },
        svg         = d3container.append( 'svg' )
                                  .attr( 'height', height )
                                  .attr( 'width', width ),
    
        x     = d3.scale.ordinal()
                        .rangeRoundBands( [ 0, width ] )
                        .domain(
                          data.map( function( d ) { return d.date; } )
                        ),
        xAxis = d3.svg.axis().scale( x ).orient( 'bottom' ),
        
        y     = d3.scale.linear()
                        .range( [ height - margin.bottom * 1.5, margin.top ] )
                        .domain(
                          [ 0, d3.max( data, function( d ) { return d.value; } ) ]
                        ),
        yAxis = d3.svg.axis().scale( y ).orient( 'left' ),
        
        xAxisGroup,
        yAxisGroup,
        
        // animation stuff,
        duration = 3000;
    
    xAxisGroup = svg.append( 'g' )
                    .attr( 'class', 'x axis' )
                    .attr( 'transform', 'translate( 0,' + ( height - margin.bottom ) + ')' )
                    .transition()
                    .call( xAxis );
    
    // filter stuff
    /* For the drop shadow filter... */
    var defs = svg.append( 'defs' );

    var filter = defs.append( 'filter' )
                      .attr( 'id', 'dropshadowArea' )

    filter.append( 'feGaussianBlur' )
          .attr( 'in', 'SourceAlpha' )
          .attr( 'stdDeviation', 3 )
          .attr( 'result', 'blur' );
    filter.append( 'feOffset' )
          .attr( 'in', 'blur' )
          .attr( 'dx', 2 )
          .attr( 'dy', 2 )
          .attr( 'result', 'offsetBlur' );

    var feMerge = filter.append( 'feMerge' );

    feMerge.append( 'feMergeNode' )
            .attr( 'in", "offsetBlur' )
    feMerge.append( 'feMergeNode' )
            .attr( 'in', 'SourceGraphic' );
    // end filter stuff
    
    drawArea(
      svg,
      data.filter(
        function( datum ) { return datum.type === 'Music'; }
      ),
      'red',
      1
    );
    
    drawArea(
      svg,
      data.filter(
        function( datum ) { return datum.type === 'Photos'; }
      ),
      'purple',
      2
    );
    
    drawArea(
      svg,
      data.filter(
        function( datum ) { return datum.type === 'Files'; }
      ),
      'cyan',
      3
    );
    
    function drawArea( svg, data, className, index ) {
      var area = d3.svg.area()
                        .x( function( d ) { return x( d.date ) + x.rangeBand() / 2 ; } )
                        .y0( height - margin.bottom * 1.5 )
                        .y1( function( d ) { return y( d.value ); } )
                        .interpolate( 'cardinal' ),
          startData = [];
      
      // if you know a better way please tell me. ;)
      // js deep "copy"
      data.forEach( function( datum ) {
        startData.push( { date : datum.date, value : 0 } );
      } );
      
      svg.append( 'path' )
          .datum( startData )
          .attr( 'class', 'ui__timeline__area ' + className )
          .attr( 'd', area )
          .attr( 'filter', 'url(#dropshadowArea)' )
          .transition()
          .delay( 1000 * index )   
          .duration( duration )
          .attrTween( 'd', tweenArea( data ) );
      
      
      // Helper functions!!!
      function tweenArea( b ) {
        return function( a ) {
          var i = d3.interpolateArray( a, b );          
          a.forEach( function( datum, index ) {
            a[ index ] = b[ index ]
          } );

          return function( t ) {
            return area( i ( t ) );
          };
        };
      }
    }
  }
  
  function ಠ_ಠ() {
    visualizeDownloadCircles( '.ui__downloadList__item' );
    visualizeDownloadTimeline( '.ui__timeline', data );
  }
  
  // yeah, let's kick things off!!!
  setTimeout(function(){ ಠ_ಠ();},1000);
  
  
} 




)( d3 );