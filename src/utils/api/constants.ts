export const HF_DOMAIN = 'https://huggingface.co';
export const HF_API_BASE = `${HF_DOMAIN}/api/models`;

export const urls = {
  // API URLs
  modelsList: () => `${HF_API_BASE}`,
  modelTree: (modelId: string) => `${HF_API_BASE}/${modelId}/tree/main`,
  modelSpecs: (modelId: string) => `${HF_API_BASE}/${modelId}`,

  // Web URLs
  modelDownloadFile: (modelId: string, filename: string) => `${HF_DOMAIN}/${modelId}/resolve/main/${filename}`,
  modelWebPage: (modelId: string) => `${HF_DOMAIN}/${modelId}`,
};
export const SYSTEM_PROMPT = `Sen Kratox adında akıllı, samimi ve hızlı bir kişisel yapay zeka asistanısın. Kullanıcının sorularına net ve doğrudan yanıt ver.`;
