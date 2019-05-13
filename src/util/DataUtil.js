export const getMinMax = (data, field) => {
	return { min: Math.min(...data.map(item => item[field])), max: Math.max(...data.map(item => item[field])) };
};
