import json
import pickle
import numpy as np

__data_columns=None
__day=None
__month=None
__year=None
__model=None

def load_artifacts():
    global __data_columns
    global __day
    global __month
    global __year
    with open("C:/Users/Yaniv/Desktop/python/bitcoin prediction/server/artifacts/bitcoin_columns.json",'r') as f:
        __data_columns=json.load(f)['data_columns']
        __day=__data_columns[0]
        __month=__data_columns[1]
        __year=__data_columns[2]
    global __model
    with open("C:/Users/Yaniv/Desktop/python/bitcoin prediction/server/artifacts/Bitcoin_prediction_model.pickle",'rb') as f:
        __model=pickle.load(f)
    print("loading")


def get_estimated_price(day,month,year):
    x=np.zeros(3)
    x[0]=day
    x[1]=month
    x[2]=year
    return round(__model.predict([x])[0],2)



if __name__=='__main__':
    load_artifacts()
    print("started")
    print(__month)
    print(get_estimated_price(28,8,2022))
    #print(__model.predict([['09','08','2022']]))