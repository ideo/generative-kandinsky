chrome_path="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
url="http://localhost:8000/"
directory=$1
mkdir -p ${directory}/raw
for seed in `cat ${directory}/seeds.txt`
do
    echo $seed
    "${chrome_path}" --headless --print-to-pdf="${directory}/raw/${seed}.pdf" ${url}#${seed}
done
