// AiVectorDataRelay.node.ts

import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription
} from 'n8n-workflow';

export class AiVectorDataRelay implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'AiRetriever Data Relay',
		name: 'aiRetrieverRelay',
		group: ['utility'],
		version: 1,
		description: 'Pass data directly to an AI Vector Store without modifications, facilitating integration with vector-based AI systems.',
		icon: 'fa:project-diagram',
		iconColor: 'black',
		defaults: {
			name: 'AI Vector Data Relay',
			color: '#5A9BD4',
		},
		subtitle: 'ai_retriever',
		inputs: ['main'],
		outputs: ['main'],
		properties: [],
		outputNames: ['AI Vector Store'],

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
