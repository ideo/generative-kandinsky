directory=$1
mkdir -p ${directory}/clean
for i in `ls ${directory}/raw/*.pdf`
do
    filename=$(basename $i)
    outname="${directory}/clean/${filename}"
    python strip_text.py < $i > $outname
    echo $outname
done
