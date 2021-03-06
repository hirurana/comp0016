import json

import pandas as pd
import numpy as np
import random

result = []

# Remove last two days as data is always incomplete for it
print("Reading excel file...")
df = pd.read_excel("DF1.xlsx")[2:]
df = df.fillna(value=0)

print("Generating JSON array...")
for row in df.iterrows():
    # Create JSON object
    data_point = {"date": str(row[1]['Date'].date()), "last_price_USD": row[1]['Last Price'], "open_interest": row[1]['Open Interest'], "simple_15_day_moving_avg": row[1]['SMAVG (15)'], "sentiment": random.uniform(0, 1)}
    print(data_point)
    result.append(data_point)

result = result[::-1]

# Write to file
print("Writing to JSON file...")
with open('bloomberg-DF1-Generic-1st-Coffee-Robusta-10-Tonne-random-sentiment.json', 'w') as output:
    json.dump(result, output)
print("Done...")
