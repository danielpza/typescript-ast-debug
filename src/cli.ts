#!/usr/bin/env node
import { main } from "./index";

const result = main(process.argv[2]);
process.stdout.write(JSON.stringify(result));
