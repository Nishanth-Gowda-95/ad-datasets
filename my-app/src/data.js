import * as React from 'react';


const columns = [
    {   field: 'id', headerName: 'Name', width: 180, valueGetter: (params) =>
            `${params.getValue(params.id, 'href')}`},
    {   field: 'size', headerName: 'Size', width: 120 },
    {
        field: 'samplingRate',
        headerName: 'Sampling Rate',
        width: 150,
        editable: true,
        hide: true,
        menu: false,
    },
    {
        field: 'lengthOfScenes',
        headerName: 'Length of Scenes',
        width: 150,
        editable: true,
    },
    {
        field: 'sensors',
        headerName: 'Sensors',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'benchmark',
        headerName: 'Benchmark',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
        hide: true
    },
    {
        field: 'dataFormat',
        headerName: 'Data Format',
        width: 150,
        editable: true,
        hide: true
    },
    {
        field: 'tooling',
        headerName: 'Tooling',
        width: 150,
        editable: true,
        hide: true
    },
    {
        field: 'annotations',
        headerName: 'Annotations',
        width: 150,
        editable: true,
    },
    {
        field: 'licensing',
        headerName: 'Licensing',
        width: 150,
        editable: true,
    },
    {
        field: 'relatedDatasets',
        headerName: 'Related Datasets',
        width: 150,
        editable: true,
        hide: true
    },
    {
        field: 'publishDate',
        headerName: 'Publish Date',
        width: 150,
        editable: true,
        hide: true
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        width: 150,
        editable: true,
        hide: true
    },
];

const rows = [
    {id: 1, size: 1, samplingRate: 2, lengthOfScenes: 3, sensors: 4, benchmark: 5, dataFormat: 6, tooling: 7, annotations: 8,
        licensing: 9, relatedDatasets: 10, publishDate: 11, lastUpdate: 12},
    {id:   "google.com", href: "www.google.de",
    size: '12.5', samplingRate: '17 Hz', lengthOfScenes: '1.8 sec', sensors: '2 Stereo Cameras CMOS 2 MP', benchmark: 'Pixel-Level Semantic Labeling Task Instance-Level Semantic Labeling Task Panoptic Semantic Labeling Task 3D Vehicle Detection Task',
        dataFormat: 'Annotation: json Image: png', tooling: '-', annotations: 'Polygonal Annotations Dense Semantic Segmentation Instance Segmentation for Vehicle/People',
        licensing: 'Freely available for non-commercial purposes', relatedDatasets: '-', publishDate: '08.2020', lastUpdate: ''}
];

export { rows, columns};