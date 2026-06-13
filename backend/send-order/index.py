import os
import json
import urllib.request

def handler(event: dict, context) -> dict:
    """Отправляет заявку с формы замера в Telegram и на email"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '—')
    phone = body.get('phone', '—')
    address = body.get('address', '—')
    comment = body.get('comment', '')

    text = (
        f"📋 <b>Новая заявка на замер</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        f"📍 <b>Адрес:</b> {address}\n"
    )
    if comment:
        text += f"💬 <b>Комментарий:</b> {comment}\n"

    tg_token = os.environ['TG_BOT_TOKEN']
    tg_chat_id = os.environ['TG_CHAT_ID']

    tg_url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
    tg_data = json.dumps({
        'chat_id': tg_chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode('utf-8')

    req = urllib.request.Request(tg_url, data=tg_data, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
