import { useEffect, useState } from 'react';

import { fetchReport } from '../services/report';

function Report() {
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(false)

    const fetchReportData = async () => {
        setLoading(true);
        try {
            const report = await fetchReport();
            if (!report) throw new Error("Don't have report")

            setReport(report);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchReportData();
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Relatórios</h1>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {
                        loading ? <h1>Carregando...</h1>
                            :
                            report ?
                                <div>
                                    <p>{report.report_id}</p>
                                    <p>{report.query}</p>
                                </div>
                                :
                                <p className="text-gray-600">
                                    Esta é a página do relatório. Você pode adicionar o conteúdo do seu relatório aqui.
                                </p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Report;
