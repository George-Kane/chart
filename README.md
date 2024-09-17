# Plot Drawing Application

This application allows users to upload CSV files containing data points and visualize them in an interactive plot.

## Features

-   CSV file upload and parsing
-   Interactive plot with adjustable window size and start index
-   Auto-update functionality with customizable interval and step size
-   Data downsampling for large datasets
-   Error margin visualization
-   Real-time calculation of data aggregates (min, max, average, variance)

## Prerequisites

-   Node.js (v14 or later)
-   npm (v6 or later)

## Installation

1. Install the dependencies:
    ```
    pnpm install
    ```

## Running the Application

1. Start the development server:

    ```
    pnpm dev
    ```

2. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Click the "Choose File" button to select a CSV file from your computer.
2. Adjust the window size, start index, update interval, and update step as needed.
3. Click the "Start" button to begin auto-updating the plot.
4. The aggregates (min, max, average, variance) will update in real-time based on the visible data.

## CSV File Format

The CSV file should have two columns: x and y values:

```
1,10
2,15
3,12
...
```

## Performance Considerations

-   The application uses data downsampling to handle large datasets efficiently.
-   The update interval has a minimum value of 16ms to prevent starving the JS event queue.

## Error Margin Visualization

The error margin is visualized as a shaded area around the main data line. The width of this area represents the potential range of values based on the calculated variance.
