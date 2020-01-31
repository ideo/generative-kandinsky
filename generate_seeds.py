"""
To generate some images:
1) make a directory for output, e.g. output/yomama/
2) put a seeds.txt file in the output directory, which could by by running this script `python generate_seeds.py > output/yomama/seeds.txt`
3) start local webserver, and run `save_many.sh output/yomama/`
4) run `strip_many.sh /output/yomama/`
"""
alphabet = 'abcdefghijklmnopqrstuvwxyz'

all_seeds = []
for a in alphabet:
    for b in alphabet:
        for n in range(10):
            for m in range(10):
                all_seeds.append(a + b + str(n) + str(m))

for seed in all_seeds[:3]:
    print(seed)
