import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class AiVectorDataRelay implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'AI Vector Data Relay',
		name: 'aiVectorDataRelay',
		group: ['utility'],
		version: 1,
		description: 'Pass data directly to an AI Vector Store without modifications, facilitating integration with vector-based AI systems.',
		icon: 'fa:project-diagram',
		iconColor: 'black',
		defaults: {
			name: 'AI Vector Data Relay',
			color: '#5A9BD4',
		},
		subtitle: 'Simplifies data transfer to AI Vector Stores',
		inputs: ['main'],
		outputs: ['main'],
		outputNames: ['AI Vector Store'],
		properties: [
			{
				displayName: 'Result Limit',
				name: 'topK',
				type: 'number',
				default: 4,
				description: 'The maximum number of vector-based results to pass through. For example, use 4 to retrieve the top 4 matches.',
			},
		],
		codex: {
			categories: ['AI', 'Data Integration'],
			subcategories: {
				AI: ['Data Relay'],
			},
			resources: {
				primaryDocumentation: [
					{
						url: 'https://docs.n8n.io/integrations/builtin/ai-vector-data-relay/',
					},
				],
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		// Pass through the data without logic, assuming correct types
		return this.prepareOutputData(items);
	}
}
