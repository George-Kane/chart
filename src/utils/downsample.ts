export const downsampleData = (data, threshold) => {
  if (data.length <= threshold) {
    return data;
  }

  const sampledData = [];
  const bucketSize = data.length / threshold;
  let a = 0;
  let nextA = 0;
  let maxAreaPoint;

  sampledData.push(data[a]);

  for (let i = 0; i < threshold - 2; i++) {
    const avgX = (i + 1) * bucketSize;
    const avgRange = [Math.floor(avgX - bucketSize / 2), Math.ceil(avgX + bucketSize / 2)];
    const avgRangeStart = Math.max(avgRange[0], a);
    const avgRangeEnd = Math.min(avgRange[1], data.length);

    let maxArea = -1;

    for (let j = avgRangeStart; j < avgRangeEnd; j++) {
      const area = Math.abs(
        (data[a].x - data[j].x) * (data[nextA].y - data[a].y) -
        (data[a].x - data[nextA].x) * (data[j].y - data[a].y)
      ) * 0.5;

      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }

    sampledData.push(maxAreaPoint);
    a = nextA;
  }

  sampledData.push(data[data.length - 1]);
  console.log(sampledData);
  
  return sampledData;
};
