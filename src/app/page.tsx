'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';

import { downsampleData } from '@/utils/downsample';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const App = () => {
	const [data, setData] = useState([]);
	const [windowSize, setWindowSize] = useState(100);
	const [startIndex, setStartIndex] = useState(0);
	const [downsampledData, setDownsampledData] = useState([]);
	const [updateInterval, setUpdateInterval] = useState(500);
	const [updateStep, setUpdateStep] = useState(10);
	const [isPlaying, setIsPlaying] = useState(false);
	const [aggregates, setAggregates] = useState({
		min: 0,
		max: 0,
		average: 0,
		variance: 0,
	});

	const fileInputRef = useRef(null);

	useEffect(() => {
		let intervalId;
		if (isPlaying) {
			intervalId = setInterval(() => {
				setStartIndex((prevIndex) =>
					Math.min(prevIndex + updateStep, data.length - windowSize)
				);
			}, updateInterval);
		}
		return () => clearInterval(intervalId);
	}, [isPlaying, updateInterval, updateStep, data.length, windowSize]);

	useEffect(() => {
		if (data.length > 0) {
			const sampled = downsampleData(
				data.slice(startIndex, startIndex + windowSize),
				1000
			);
			setDownsampledData(sampled);
			calculateAggregates();
		}
	}, [data, startIndex, windowSize]);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			const content = e.target.result;
			const parsedData = parseCSV(content);
			setData(parsedData);
			setStartIndex(0);
		};
		reader.readAsText(file);
	};

	const parseCSV = (content) => {
		const lines = content.split('\n');
		const data = [];
		for (let i = 0; i < lines.length; i++) {
			const [x, y] = lines[i].split(',');
			if (x && y) {
				data.push({ x: parseFloat(x), y: parseFloat(y) });
			}
		}
		if (data.length > 100000000) return alert('Too many points');
		return data;
	};

	const calculateAggregates = () => {
		const windowData = downsampledData.slice(
			startIndex,
			startIndex + windowSize
		);
		const yValues = windowData.map((point) => point.y);
		const min = Math.min(...yValues);
		const max = Math.max(...yValues);
		const average =
			yValues.reduce((sum, val) => sum + val, 0) / yValues.length;
		const variance =
			yValues.reduce((sum, val) => sum + Math.pow(val - average, 2), 0) /
			yValues.length;

		setAggregates({ min, max, average, variance });
	};

	const chartData = {
		labels: downsampledData
			.slice(startIndex, startIndex + windowSize)
			.map((point) => point.x),
		datasets: [
			{
				label: 'Data Series',
				data: downsampledData
					.slice(startIndex, startIndex + windowSize)
					.map((point) => point.y),
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			},
			{
				label: 'Upper Error Margin',
				data: downsampledData.map(
					(point) => point.y + Math.sqrt(aggregates.variance)
				),
				borderColor: 'transparent',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				pointRadius: 0,
				fill: '+1',
			},
			{
				label: 'Lower Error Margin',
				data: downsampledData.map(
					(point) => point.y - Math.sqrt(aggregates.variance)
				),
				borderColor: 'transparent',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				pointRadius: 0,
				fill: false,
			},
		],
	};

	const chartOptions = {
		scales: {
			x: {
				type: 'linear',
				position: 'bottom',
			},
			y: {
				type: 'linear',
				position: 'left',
			},
		},
		plugins: {
			legend: {
				display: true,
			},
			errorMarginPlugin: {},
		},
	};

	return (
		<div>
			<input
				type="file"
				ref={fileInputRef}
				onChange={handleFileUpload}
				accept=".csv"
			/>
			<div>
				<label>Window Size: </label>
				<input
					type="number"
					value={windowSize}
					onChange={(e) => setWindowSize(Number(e.target.value))}
				/>
			</div>
			<div>
				<label>Start Index: </label>
				<input
					type="number"
					value={startIndex}
					onChange={(e) => setStartIndex(Number(e.target.value))}
				/>
			</div>
			<div>
				<label>Update Interval (ms): </label>
				<input
					type="number"
					value={updateInterval}
					onChange={(e) => setUpdateInterval(Number(e.target.value))}
					min="16"
				/>
			</div>
			<div>
				<label>Update Step: </label>
				<input
					type="number"
					value={updateStep}
					onChange={(e) => setUpdateStep(Number(e.target.value))}
				/>
			</div>
			<button onClick={() => setIsPlaying(!isPlaying)}>
				{isPlaying ? 'Stop' : 'Start'}
			</button>
			<Line data={chartData} options={chartOptions} />
			<div>
				<h3>Aggregates:</h3>
				<p>Min: {aggregates.min.toFixed(2)}</p>
				<p>Max: {aggregates.max.toFixed(2)}</p>
				<p>Average: {aggregates.average.toFixed(2)}</p>
				<p>Variance: {aggregates.variance.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default App;
