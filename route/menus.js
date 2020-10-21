const drink = (req, res, next) => {
    req.app.render('drink', function(err, html){
        if(err){
            console.log(err.stack);
            res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
            res.write(`<h2>페이지 로드 실패</h2>`) 
            res.write(`<p>페이지 로드를 실패 하였습니다.</p>`)
            res.end();
            return;
        }
        res.end(html);
    });
} 
const coldbrew = (req, res, next) => {
    req.app.render('coldbrew', function(err, html){
        if(err){
            console.log(err.stack);
            res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
            res.write(`<h2>페이지 로드 실패</h2>`) 
            res.write(`<p>페이지 로드를 실패 하였습니다.</p>`)
            res.end();
            return;
        }
        res.end(html);
    });
} 

module.exports.drink = drink;
module.exports.coldbrew = coldbrew;