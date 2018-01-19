import hashlib

def md5_hash(src):
    m = hashlib.md5()
    m.update(src.encode('UTF-8'))
    return m.hexdigest()
