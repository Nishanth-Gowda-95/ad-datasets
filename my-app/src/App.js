import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <table id={'tableDatasets'}>
          <thead>
            <tr>
              <th></th>
              <th colSpan="4" className={'Title'}>Size</th>
              <th className={'Title'}>Sampling Rate</th>
              <th className={'Title'}>Length of Scenes</th>
              <th className={'Title'}>Sensors</th>
              <th className={'Title'}>Benchmark</th>
              <th className={'Title'}>Data Format</th>
              <th className={'Title'}>Tooling</th>
              <th className={'Title'}>Annotations</th>
              <th className={'Title'}>Statistics</th>
              <th className={'Title'}>Licensing</th>
              <th className={'Title'}>Related Datasets</th>
              <th className={'Title'}>Publish Date </th>
            </tr>
            <tr>
              <th></th>
              {/*Size*/}
              <th className={'subTitle'}>GB</th>
              <th className={'subTitle'}>hrs</th>
              <th className={'subTitle'}>Frames</th>
              <th className={'subTitle'}># of Scenes</th>
              {/* Sampling Rate */}
              <th></th>
              {/* Lenth of Scenes */}
              <th></th>
              {/* Sensors */}
              <th></th>
              {/* Benchmark */}
              <th></th>
              {/* Data Format */}
              <th></th>
              {/* Tooling */}
              <th></th>
              {/* Annotations */}
              <th></th>
              {/* Statistics */}
              <th></th>
              {/* Licensing */}
              <th></th>
              {/* Related Datasets */}
              <th></th>
              {/*Publish Date */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href={'https://www.cityscapes-dataset.com'}>Cityscapes 3D</a></td>
              <td>-</td>
              {/* hours */}
              <td>12.5</td>
              {/* Frames */}
              <td>750 000</td>
              {/* Number of Scenes */}
              <td>25 000</td>
              {/* Sampling Rate */}
              <td>17 Hz</td>
              {/* Length of Scenes */}
              <td>1.8 sec</td>
              {/* Sensors */}
              <td>2 Stereo Cameras CMOS 2 MP</td>
              {/* Benchmark */}
              <td>Pixel-Level Semantic Labeling Task Instance-Level Semantic Labeling Task Panoptic Semantic Labeling Task 3D Vehicle Detection Task</td>
              {/* Data Format */}
              <td>Annotation: json Image: png</td>
              {/* Tooling */}
              <td>-</td>
              {/* Annotations */}
              <td>Polygonal Annotations Dense Semantic Segmentation Instance Segmentation for Vehicle/People </td>
              {/* Statistics */}
              <td><img src={'Stats_Cityscape_2.png'} alt={'-'}/></td>
              {/* Licensing */}
              <td>Freely available for non-commercial purposes</td>
              {/* Related Datasets */}
              <td>-</td>
              {/*Publish Date */}
              <td>08.2020</td>
            </tr>
            <tr>
              <td><a href={'https://www.bdd100k.com/'}>BDD100k</a></td>
              {/* in GB */}
              <td>1 800</td>
              {/* hours */}
              <td>1111</td>
              {/* Frames */}
              <td>120 000 000</td>
              {/* Number of Scenes */}
              <td>100 000</td>
              {/* Sampling Rate */}
              <td>30 Hz</td>
              {/* Length of Scenes */}
              <td>40 sec</td>
              {/* Sensors */}
              <td>Crowd-sourced, no fixed setup, camera and GPS/IMU</td>
              {/* Benchmark */}
              <td>Object Detection Instance Segmentation Semantic Segmentation Drivable Area Object Tracking Segmentation Tracking </td>
              {/* Data Format */}
              <td>Scalable Format</td>
              {/* Tooling */}
              <td>-</td>
              {/* Annotations */}
              <td>Image Level Annotations (Weather, Scene Type, Day Time), Object Detection - Bounding boxes, Lane Marking, Drivable Area, fie-grained pixel level annotations </td>
              {/* Statistics */}
              <td>-</td>
              {/* Licensing */}
              <td>Freely available for non-commercial purposes</td>
              {/* Related Datasets */}
              <td>-</td>
              {/*Publish Date */}
              <td>04.2020</td>
            </tr>
            <tr>
              <td><a href={'http://www.cvlibs.net/datasets/kitti/index.php'}> KITTI</a></td>
              {/* in GB */}
              <td>Keine Ahnung</td>
              {/* hours */}
              <td>Keine Ahnung</td>
              {/* Frames */}
              <td>Keine Ahnung</td>
              {/* Number of Scenes */}
              <td>Keine Ahnung</td>
              {/* Sampling Rate */}
              <td>10 Hz</td>
              {/* Length of Scenes */}
              <td>Keine Ahnung</td>
              {/* Sensors */}
              <td>1 GPS/IMU 1 Laserscanner 2 Grayscale Cameras 2 Color Cameras 4 Varifocal Lenses</td>
              {/* Benchmark */}
              <td>Keine Ahnung</td>
              {/* Data Format */}
              <td>Keine Ahnung</td>
              {/* Tooling */}
              <td>Keine Ahnung</td>
              {/* Annotations */}
              <td>Keine Ahnung</td>
              {/* Statistics */}
              <td>Keine Ahnung</td>
              {/* Licensing */}
              <td>Keine Ahnung</td>
              {/* Related Datasets */}
              <td>Keine Ahnung</td>
              <td>04.2020</td>
              <td></td>
            </tr>
            <tr>
              <td><a hrf={'https://waymo.com/open'}>Waymo Open Motion Dataset</a></td>
              {/* in GB */}
              <td>-</td>
              {/* hours */}
              <td>574</td>
              {/* Frames */}
              <td> > 20 000 000 </td>
              {/* Number of Scenes */}
              <td>103354</td>
              {/* Sampling Rate */}
              <td>10 Hz</td>
              {/* Length of Scenes */}
              <td>20 sec</td>
              {/* Sensors */}
              <td>5 Lidar 5 Cameras </td>
              {/* Benchmark */}
              <td>Keine Ahnung</td>
              {/* Data Format */}
              <td>Keine Ahnung</td>
              {/* Tooling */}
              <td>-</td>
              {/* Annotations */}
              <td>Keine Ahnung</td>
              {/* Statistics */}
              <td></td>
              {/* Licensing */}
              <td>Freely available for non-commercial purposes</td>
              {/* Related Datasets */}
              <td>Waymo Open Perception Dataset</td>
              <td>03.2021</td>
              <td></td>
            </tr>
            <tr>
              <td>Cityscapes</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td></td>
            </tr>
            <tr>
              <td>PandaSet</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td></td>
            </tr>
            <tr>
              <td>nuScenes</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td></td>
            </tr>
            <tr>
              <td>Oxford RobotCar</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td></td>
            </tr>
            <tr>
              <td>Lyft Level 5</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td></td>
            </tr>
            <tr>
              <td>ApolloScape</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td>Keine Ahnung</td>
              <td></td>
            </tr>
            <tr>
              <td>Bsp</td>
              {/* in GB */}
              <td>Keine Ahnung</td>
              {/* hours */}
              <td>Keine Ahnung</td>
              {/* Frames */}
              <td>Keine Ahnung</td>
              {/* Number of Scenes */}
              <td>Keine Ahnung</td>
              {/* Sampling Rate */}
              <td>Keine Ahnung</td>
              {/* Length of Scenes */}
              <td>Keine Ahnung</td>
              {/* Sensors */}
              <td>Keine Ahnung</td>
              {/* Benchmark */}
              <td>Keine Ahnung</td>
              {/* Data Format */}
              <td>Keine Ahnung</td>
              {/* Tooling */}
              <td>Keine Ahnung</td>
              {/* Annotations */}
              <td>Keine Ahnung</td>
              {/* Statistics */}
              <td>Keine Ahnung</td>
              {/* Licensing */}
              <td>Keine Ahnung</td>
              {/* Related Datasets */}
              <td>Keine Ahnung</td>
              <td>04.2020</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default App;
