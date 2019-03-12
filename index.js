const TelegramBot = require('node-telegram-bot-api');

const request = require('request');

const TOKEN = '696206585:AAF2gp7FHSNLJZ8nbiP3bG2G3kcm1JZNT3g';


const { InlineKeyboard, ReplyKeyboard, ForceReply } = require("..");
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const __1 = require("..");
const TelegramBot = require("node-telegram-bot-api");

if (process.argv.length < 3) {
	throw new Error("To test this bot, please pass a bot-token to the application.");
    throw new Error("To test this bot, please pass a bot-token to the application.");
}

const token = process.argv[2];
const bot = new TelegramBot(token, { polling: true });
let isRKOpen = false;

const rk = new ReplyKeyboard();
const ik = new InlineKeyboard();

const rk = new __1.ReplyKeyboard();
const ik = new __1.InlineKeyboard();
rk
	.addRow("1:1 button", "1:2 button")
	.addRow("2:1 button", "2:2 button");

    .addRow("1:1 button", "1:2 button")
    .addRow("2:1 button", "2:2 button");
ik
	.addRow(
		{ text: "1:1 button", callback_data: "Works!" },
		{ text: "1:2 button", callback_data: "Works!" }
	)
	.addRow(
		{ text: "2:1 button", callback_data: "Works!" },
		{ text: "2:2 button", callback_data: "Works!" }
	);
