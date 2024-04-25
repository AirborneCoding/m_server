------

email : ministrybackend@gmail.com
password : ministryBackend1

---------
-- -H 192.168.8.102
------

1. إحصائيات-متعلقة-بالمخدرات
2. إحصائيات-متعلقة-بالأموال
3. إحصائيات-متعلقة-بقوانين-خاصة
4. إحصائيات-متعلقة-بالأمن-و-النظام-العام
5. إحصائيات-متعلقة-بنظام-الأسرة-و-الأخلاق
6. إحصائيات-متعلقة-بالتزوير-و-التزييف-و-الاتصال
7. نصوص-قانونية
8. مشاريع-و-قوانين
9. اجتهادات-قضائية
10. سلسلة-الإتفاقات
11. المهن-القضائية
12. مجلات-المديرية

      "type": "uid",
      "targetField": "title"






      ----------
      Custom Controller (./api/search/controllers/search.js):
javascript
Copy code
module.exports = {
  async search(ctx) {
    const { q } = ctx.query; // Assuming 'q' is the query parameter
    if (!q) {
      return ctx.badRequest('Query parameter "q" is required');
    }

    // Search logic across your tables (articles, versions, statistics)
    const articles = await strapi.query('article').search({ _q: q });
    const versions = await strapi.query('version').search({ _q: q });
    const statistics = await strapi.query('statistic').search({ _q: q });

    // Combine and return the results
    return {
      articles,
      versions,
      statistics
    };
  },
};
Custom Route: Add a custom route to your config/routes.json file:
json
Copy code
{
  "routes": [
    {
      "method": "GET",
      "path": "/search",
      "handler": "search.search",
      "config": {
        "policies": []
      }
    }
  ]
}

-----------
@echo off

rem Change to your Strapi backend directory
cd /d "C:\Users\Airbo\OneDrive\Bureau\ministry\server"

rem Start the Strapi backend
start npm start

rem Change to your React frontend directory
cd /d "C:\Users\Airbo\OneDrive\Bureau\ministry\client"

rem Start the React frontend
start npm start

rem Open the React frontend in the default browser
timeout /t 20 /nobreak >nul 2>&1
start http://localhost:3000

-------
shell:startup